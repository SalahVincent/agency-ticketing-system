import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ClerkAuthGuard } from '../auth/clerk/clerk-auth.guard';
import { CurrentAgent } from '../auth/clerk/current-agent.decorator';
import type { CurrentAgentContext } from '../auth/clerk/current-agent.decorator';
import { NotificationListResponse, NotificationsService } from './notifications.service';

@Controller('notifications')
@UseGuards(ClerkAuthGuard)
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  async getNotifications(
    @CurrentAgent() agent: CurrentAgentContext,
    @Query('filter') filter: 'all' | 'unread' = 'all',
    @Query('limit') limit: string,
  ): Promise<NotificationListResponse> {
    const numericLimit = limit ? Number(limit) : undefined;
    return this.notificationsService.getNotifications(
      agent.clerkUserId,
      agent.agencyId,
      filter,
      numericLimit,
    );
  }

  @Get('unread-count')
  async getUnreadCount(
    @CurrentAgent() agent: CurrentAgentContext,
  ): Promise<{ unreadCount: number }> {
    return {
      unreadCount: await this.notificationsService.getUnreadCount(
        agent.clerkUserId,
        agent.agencyId,
      ),
    };
  }

  @Post('read-all')
  async markAllAsRead(
    @CurrentAgent() agent: CurrentAgentContext,
  ): Promise<{ updated: number }> {
    return {
      updated: await this.notificationsService.markAllAsRead(agent.clerkUserId, agent.agencyId),
    };
  }

  @Post(':id/read')
  async markOneAsRead(
    @CurrentAgent() agent: CurrentAgentContext,
    @Param('id') notificationId: string,
  ): Promise<{ success: boolean }> {
    return {
      success: await this.notificationsService.markAsRead(
        notificationId,
        agent.clerkUserId,
        agent.agencyId,
      ),
    };
  }
}
