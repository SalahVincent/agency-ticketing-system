import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface CurrentAgentContext {
  clerkUserId: string;
  agencyId: string;
  email: string | null;
}

export const CurrentAgent = createParamDecorator(
  (_data: unknown, context: ExecutionContext): CurrentAgentContext => {
    const request = context.switchToHttp().getRequest<{
      agent: CurrentAgentContext;
    }>();

    return request.agent;
  },
);