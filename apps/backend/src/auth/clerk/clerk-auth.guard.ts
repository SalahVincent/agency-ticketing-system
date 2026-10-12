import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { createClerkClient, verifyToken } from '@clerk/backend';
import type { CurrentAgentContext } from './current-agent.decorator';

interface CachedClerkUser {
  expiresAt: number;
  agencyId: unknown;
  email: string | null;
}

interface ClerkRequest {
  headers: { authorization?: string };
  agent?: CurrentAgentContext;
}

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  private readonly userCache = new Map<string, CachedClerkUser>();
  private clerkClient?: ReturnType<typeof createClerkClient>;

  invalidateUserCache(userId: string): void {
    this.userCache.delete(userId);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<ClerkRequest>();
    const bearerToken = request.headers.authorization?.match(/^Bearer\s+(.+)$/i)?.[1];

    if (!bearerToken) {
      throw new UnauthorizedException('Invalid Clerk session');
    }

    const secretKey = process.env.CLERK_SECRET_KEY;
    if (!secretKey) {
      throw new InternalServerErrorException('CLERK_SECRET_KEY is not configured');
    }

    let clerkUserId: string;
    try {
      const payload = await verifyToken(bearerToken, { secretKey });
      if (typeof payload.sub !== 'string' || !payload.sub) {
        throw new Error('Clerk token has no subject');
      }
      clerkUserId = payload.sub;
    } catch {
      throw new UnauthorizedException('Invalid Clerk session');
    }

    const clerkUser = await this.getCachedUser(clerkUserId, secretKey);
    if (typeof clerkUser.agencyId !== 'string' || !clerkUser.agencyId.trim()) {
      throw new ForbiddenException('No agency linked to this account');
    }

    request.agent = {
      clerkUserId,
      agencyId: clerkUser.agencyId,
      email: clerkUser.email,
    };

    return true;
  }

  private async getCachedUser(userId: string, secretKey: string): Promise<CachedClerkUser> {
    const cached = this.userCache.get(userId);
    if (cached && cached.expiresAt > Date.now()) {
      return cached;
    }

    this.clerkClient ??= createClerkClient({ secretKey });
    const user = await this.clerkClient.users.getUser(userId);
    const result: CachedClerkUser = {
      expiresAt: Date.now() + 60_000,
      agencyId: user.publicMetadata.agencyId,
      email: user.primaryEmailAddress?.emailAddress ?? null,
    };

    if (typeof result.agencyId === 'string' && result.agencyId.trim()) {
      this.userCache.set(userId, result);
    }
    return result;
  }
}