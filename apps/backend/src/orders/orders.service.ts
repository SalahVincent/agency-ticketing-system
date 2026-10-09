import { Injectable } from '@nestjs/common';
import { Prisma, TicketStatus } from '@agency-ticketing/database';
import { PrismaService } from '../prisma/prisma.service';

export type OrderStatusLabel = 'Confirmed' | 'Boarded' | 'Cancelled';

export interface OrderListItem {
  id: string;
  ticketId: string;
  customerName: string;
  phone: string;
  route: string;
  travelDate: string;
  seatNo: string;
  amount: number;
  status: OrderStatusLabel;
  createdAt: string;
}

export interface OrdersQueryInput {
  agencyId?: string;
}

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  private mapStatus(status: TicketStatus): OrderStatusLabel {
    switch (status) {
      case TicketStatus.BOARDED:
        return 'Boarded';
      case TicketStatus.CANCELLED:
        return 'Cancelled';
      case TicketStatus.CONFIRMED:
      default:
        return 'Confirmed';
    }
  }

  async getOrders({ agencyId }: OrdersQueryInput = {}): Promise<OrderListItem[]> {
    const where: Prisma.TicketWhereInput | undefined = agencyId ? { agencyId } : undefined;

    const tickets = await this.prisma.ticket.findMany({
      where,
      include: {
        customer: true,
        schedule: { include: { agency: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return tickets.map((ticket) => ({
      id: ticket.id,
      ticketId: ticket.ticketId,
      customerName: ticket.customer.name,
      phone: ticket.customer.whatsappPhone,
      route: `${ticket.schedule.origin} ➔ ${ticket.schedule.destination}`,
      travelDate: new Date(ticket.createdAt).toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      }),
      seatNo: `Seat ${ticket.seatNo}`,
      amount: Number(ticket.amount),
      status: this.mapStatus(ticket.status),
      createdAt: ticket.createdAt.toISOString(),
    }));
  }
}
