import {
  CanActivate,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { verifyToken } from '@clerk/backend';

interface ClerkSessionRequest {
  headers: { authorization?: string };
  clerkUserId?: string;
}

@Injectable()
export class ClerkSessionGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<ClerkSessionRequest>();
    const token = request.headers.authorization?.match(/^Bearer\s+(.+)$/i)?.[1];

    if (!token) {
      throw new UnauthorizedException('Invalid Clerk session');
    }

    const secretKey = process.env.CLERK_SECRET_KEY;
    if (!secretKey) {
      throw new InternalServerErrorException('CLERK_SECRET_KEY is not configured');
    }

    try {
      const payload = await verifyToken(token, { secretKey });
      if (typeof payload.sub !== 'string' || !payload.sub) {
        throw new Error('Clerk token has no subject');
      }
      request.clerkUserId = payload.sub;
    } catch {
      throw new UnauthorizedException('Invalid Clerk session');
    }

    return true;
  }
}