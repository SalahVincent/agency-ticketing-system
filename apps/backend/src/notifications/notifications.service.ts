import { Injectable, Logger } from '@nestjs/common';
import { NotificationType, Prisma } from '@agency-ticketing/database';
import { PrismaService } from '../prisma/prisma.service';

export interface NotificationItem {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  createdAt: string;
  read: boolean;
}

export interface NotificationListResponse {
  notifications: NotificationItem[];
  unreadCount: number;
}

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(private readonly prisma: PrismaService) {}

  private visibleToAgencyWhere(agencyId: string): Prisma.NotificationWhereInput {
    return {
      OR: [{ agencyId }, { agencyId: null }],
    };
  }

  async getNotifications(
    clerkUserId: string,
    agencyId: string,
    filter: 'all' | 'unread' = 'all',
    limit?: number,
  ): Promise<NotificationListResponse> {
    const visibleWhere = this.visibleToAgencyWhere(agencyId);
    const where: Prisma.NotificationWhereInput = {
      ...visibleWhere,
      ...(filter === 'unread' ? { reads: { none: { clerkUserId } } } : {}),
    };

    const items = await this.prisma.notification.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: Number.isFinite(limit) && limit && limit > 0 ? limit : 20,
      include: {
        reads: {
          where: { clerkUserId },
          select: { clerkUserId: true },
        },
      },
    });

    const unreadCount = await this.prisma.notification.count({
      where: {
        ...visibleWhere,
        reads: { none: { clerkUserId } },
      },
    });

    return {
      notifications: items.map((item) => ({
        id: item.id,
        type: item.type,
        title: item.title,
        description: item.description,
        createdAt: item.createdAt.toISOString(),
        read: item.reads.length > 0,
      })),
      unreadCount,
    };
  }

  async getUnreadCount(clerkUserId: string, agencyId: string): Promise<number> {
    return this.prisma.notification.count({
      where: {
        ...this.visibleToAgencyWhere(agencyId),
        reads: { none: { clerkUserId } },
      },
    });
  }

  async markAsRead(notificationId: string, clerkUserId: string, agencyId: string): Promise<boolean> {
    const notification = await this.prisma.notification.findUnique({
      where: { id: notificationId },
      select: { id: true, agencyId: true },
    });

    if (!notification) {
      return false;
    }

    if (notification.agencyId !== null && notification.agencyId !== agencyId) {
      return false;
    }

    await this.prisma.notificationRead.upsert({
      where: {
        notificationId_clerkUserId: {
          notificationId,
          clerkUserId,
        },
      },
      update: {},
      create: {
        notificationId,
        clerkUserId,
      },
    });

    return true;
  }

  async markAllAsRead(clerkUserId: string, agencyId: string): Promise<number> {
    const visibleNotifications = await this.prisma.notification.findMany({
      where: this.visibleToAgencyWhere(agencyId),
      select: { id: true },
    });

    await Promise.all(
      visibleNotifications.map((notification) =>
        this.prisma.notificationRead.upsert({
          where: {
            notificationId_clerkUserId: {
              notificationId: notification.id,
              clerkUserId,
            },
          },
          update: {},
          create: {
            notificationId: notification.id,
            clerkUserId,
          },
        }),
      ),
    );

    return visibleNotifications.length;
  }

  async notify(
    agencyId: string | null,
    type: NotificationType,
    title: string,
    description: string,
  ): Promise<void> {
    try {
      await this.prisma.notification.create({
        data: {
          agencyId,
          type,
          title,
          description,
        },
      });
    } catch (error) {
      this.logger.error(`Failed to create notification: ${title}`, error instanceof Error ? error.stack : undefined);
    }
  }
}
