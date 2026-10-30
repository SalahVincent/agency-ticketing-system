import { Injectable } from '@nestjs/common';
import { Prisma, TicketStatus } from '@agency-ticketing/database';
import { PrismaService } from '../prisma/prisma.service';

export type DashboardEventKind = 'booked' | 'boarded';

export interface DashboardEventItem {
  id: string;
  kind: DashboardEventKind;
  passengerName: string;
  route: string;
  seatNo: string;
  at: string;
}

export interface DashboardSummary {
  totalRevenue: number;
  bookedSeats: number;
  trips: number;
  boardedCount: number;
  activity: DashboardEventItem[];
  revenueTrend: { label: string; revenue: number }[];
}

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getSummary(agencyId: string, timeframe: 'Week' | 'Month' = 'Week'): Promise<DashboardSummary> {
    const ticketWhere: Prisma.TicketWhereInput = { agencyId };

    const [revenueResult, scheduleCount, bookedSeats, boardedCount, tickets] = await Promise.all([
      this.prisma.ticket.aggregate({
        where: {
          ...ticketWhere,
          status: { in: [TicketStatus.CONFIRMED, TicketStatus.BOARDED] },
        },
        _sum: { amount: true },
      }),
      this.prisma.routeSchedule.count({
        where: { agencyId, status: { not: 'CANCELLED' } },
      }),
      this.prisma.ticket.count({
        where: {
          ...ticketWhere,
          status: { not: TicketStatus.CANCELLED },
        },
      }),
      this.prisma.ticket.count({
        where: {
          ...ticketWhere,
          status: TicketStatus.BOARDED,
        },
      }),
      this.prisma.ticket.findMany({
        where: ticketWhere,
        include: {
          customer: true,
          schedule: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    const activity = tickets
      .flatMap((ticket) => {
        const route = `${ticket.schedule.origin} ➔ ${ticket.schedule.destination}`;
        const metrics: DashboardEventItem[] = [
          {
            id: `${ticket.id}-booked`,
            kind: 'booked',
            passengerName: ticket.customer.name,
            route,
            seatNo: ticket.seatNo,
            at: ticket.createdAt.toISOString(),
          },
        ];

        if (ticket.status === TicketStatus.BOARDED && ticket.boardedAt) {
          metrics.push({
            id: `${ticket.id}-boarded`,
            kind: 'boarded',
            passengerName: ticket.customer.name,
            route,
            seatNo: ticket.seatNo,
            at: ticket.boardedAt.toISOString(),
          });
        }

        return metrics;
      })
      .sort((a, b) => new Date(b.at).getTime() - new Date(a.at).getTime())
      .slice(0, 10);

    const now = new Date();
    const daySpan = timeframe === 'Month' ? 28 : 7;
    const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - (daySpan - 1)));
    const bucketSize = daySpan / 7;
    const revenueTrend = Array.from({ length: 7 }, (_, index) => {
      const bucketStart = new Date(start.getTime() + index * bucketSize * 24 * 60 * 60 * 1000);
      const bucketEnd = new Date(start.getTime() + (index + 1) * bucketSize * 24 * 60 * 60 * 1000);
      const revenue = tickets.reduce((sum, ticket) => {
        const createdAt = ticket.createdAt.getTime();
        if (
          createdAt >= bucketStart.getTime() &&
          createdAt < bucketEnd.getTime() &&
          (ticket.status === TicketStatus.CONFIRMED || ticket.status === TicketStatus.BOARDED)
        ) return sum + Number(ticket.amount);
        return sum;
      }, 0);
      const label = timeframe === 'Week'
        ? new Intl.DateTimeFormat('en-US', { weekday: 'short', timeZone: 'UTC' }).format(bucketStart)
        : new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' }).format(bucketStart);
      return { label, revenue };
    });

    return {
      totalRevenue: Number(revenueResult._sum.amount ?? 0),
      bookedSeats: bookedSeats,
      trips: scheduleCount,
      boardedCount: boardedCount,
      activity,
      revenueTrend,
    };
  }
}
