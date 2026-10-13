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
}

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getSummary(agencyId: string): Promise<DashboardSummary> {
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
        where: { agencyId },
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

    return {
      totalRevenue: Number(revenueResult._sum.amount ?? 0),
      bookedSeats: bookedSeats,
      trips: scheduleCount,
      boardedCount: boardedCount,
      activity,
    };
  }
}
