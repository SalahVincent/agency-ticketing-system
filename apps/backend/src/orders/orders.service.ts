import { BadRequestException, Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac, randomBytes } from 'crypto';
import * as QRCode from 'qrcode';
import { NotificationType, TicketStatus } from '@agency-ticketing/database';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';

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

@Injectable()
export class OrdersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly notifications: NotificationsService,
  ) {}

  async createManualTicket(
    agencyId: string,
    input: { scheduleId: string; seatNum?: number | null; passengerName: string; phone: string },
  ): Promise<{ ticketId: string; seatNo: string; amount: number; qrCode: string }> {
    const passengerName = input.passengerName?.trim();
    const phone = input.phone?.trim();
    if (!input.scheduleId || !passengerName || passengerName.length > 160) {
      throw new BadRequestException('Choose a route and enter a valid passenger name.');
    }
    if (!phone || phone.length > 40 || !/[0-9]{6,}/.test(phone)) {
      throw new BadRequestException('Enter a valid passenger phone number.');
    }

    const signingSecret = this.config.getOrThrow<string>('TICKET_SIGNING_SECRET');
    const ticket = await this.prisma.$transaction(async (tx) => {
      await tx.$queryRaw`SELECT "id" FROM "RouteSchedule" WHERE "id" = ${input.scheduleId} FOR UPDATE`;
      const schedule = await tx.routeSchedule.findFirst({ where: { id: input.scheduleId, agencyId } });
      if (!schedule) throw new NotFoundException('Travel session not found for this agency.');

      const occupied = await tx.ticket.findMany({
        where: { scheduleId: schedule.id, status: { not: TicketStatus.CANCELLED } },
        select: { seatNo: true },
      });
      const occupiedSeats = new Set(occupied.map((item) => Number(item.seatNo)));
      const seatNum = input.seatNum == null
        ? Array.from({ length: schedule.totalSeats }, (_, index) => index + 1).find((seat) => !occupiedSeats.has(seat))
        : Number(input.seatNum);
      if (!seatNum || !Number.isInteger(seatNum) || seatNum < 1 || seatNum > schedule.totalSeats || occupiedSeats.has(seatNum)) {
        throw new ConflictException('That seat is no longer available. Choose another seat.');
      }

      const customer = await tx.customer.upsert({
        where: { whatsappPhone: phone },
        update: { name: passengerName },
        create: { whatsappPhone: phone, name: passengerName },
      });
      const ticketId = `TKT-${randomBytes(5).toString('hex').toUpperCase()}`;
      const orderId = `ORD-${randomBytes(5).toString('hex').toUpperCase()}`;
      const seatNo = String(seatNum);
      const signature = createHmac('sha256', signingSecret)
        .update(`${ticketId}|${schedule.id}|${seatNo}`)
        .digest('hex')
        .slice(0, 32);

      const created = await tx.ticket.create({
        data: {
          ticketId,
          orderId,
          agencyId,
          scheduleId: schedule.id,
          customerId: customer.id,
          seatNo,
          amount: schedule.pricePerSeat,
          status: TicketStatus.CONFIRMED,
          qrCodeSignature: signature,
        },
        include: { schedule: true },
      });
      await tx.routeSchedule.update({ where: { id: schedule.id }, data: { bookedSeats: { increment: 1 } } });
      return created;
    });

    const qr = await QRCode.toDataURL(`${ticket.ticketId}.${ticket.qrCodeSignature}`, { width: 480, margin: 2 });
    void this.notifications.notify(
      agencyId,
      NotificationType.TICKET_SALE,
      'New ticket sold',
      `${passengerName} booked seat ${ticket.seatNo} on ${ticket.schedule.origin} → ${ticket.schedule.destination}.`,
    );
    return { ticketId: ticket.ticketId, seatNo: ticket.seatNo, amount: Number(ticket.amount), qrCode: qr };
  }

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

  async getOrders(agencyId: string): Promise<OrderListItem[]> {
    const tickets = await this.prisma.ticket.findMany({
      where: { agencyId },
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
