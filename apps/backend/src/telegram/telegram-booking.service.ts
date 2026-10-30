import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomBytes, createHmac } from 'crypto';
import * as QRCode from 'qrcode';
import { NotificationType, Prisma, TicketStatus } from '@agency-ticketing/database';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';

export type ScheduleWithAgency = Prisma.RouteScheduleGetPayload<{
  include: { agency: true };
}>;

export type TicketWithSchedule = Prisma.TicketGetPayload<{
  include: { schedule: { include: { agency: true } } };
}>;


export class SeatTakenError extends Error {
  constructor() {
    super('SEAT_TAKEN');
  }
}

export class ScheduleNotFoundError extends Error {
  constructor() {
    super('SCHEDULE_NOT_FOUND');
  }
}

@Injectable()
export class TelegramBookingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly notificationsService: NotificationsService,
  ) {}

  getSchedule(scheduleId: string): Promise<ScheduleWithAgency | null> {
  return this.prisma.routeSchedule.findUnique({
    where: { id: scheduleId },
    include: { agency: true },
  });
}

  /** Seat numbers that are taken (any ticket that isn't cancelled). */
  async getBookedSeatNumbers(scheduleId: string): Promise<number[]> {
    const tickets = await this.prisma.ticket.findMany({
      where: { scheduleId, status: { not: TicketStatus.CANCELLED } },
      select: { seatNo: true },
    });
    return tickets.map((t) => parseInt(t.seatNo, 10)).filter((n) => !Number.isNaN(n));
  }

  private sign(ticketId: string, scheduleId: string, seatNo: string): string {
    const secret = this.config.getOrThrow<string>('TICKET_SIGNING_SECRET');
    return createHmac('sha256', secret)
      .update(`${ticketId}|${scheduleId}|${seatNo}`)
      .digest('hex')
      .slice(0, 32);
  }

  /**
   * DEMO: creates a CONFIRMED ticket directly (no payment step).
   * The schedule row is locked inside the transaction so two people
   * can't take the same seat at the same moment.
   */
  async createTicket(params: {
  scheduleId: string;
  seatNum: number;
  telegramUserId: number;
  passengerName: string;
}): Promise<{ ticket: TicketWithSchedule; qr: Buffer }> {
    const { scheduleId, seatNum, telegramUserId, passengerName } = params;
    const seatNo = String(seatNum);

    const ticket = await this.prisma.$transaction(async (tx) => {
      await tx.$queryRaw`SELECT "id" FROM "RouteSchedule" WHERE "id" = ${scheduleId} FOR UPDATE`;

      const schedule = await tx.routeSchedule.findUnique({ where: { id: scheduleId } });
      if (!schedule) throw new ScheduleNotFoundError();
      if (!Number.isInteger(seatNum) || seatNum < 1 || seatNum > schedule.totalSeats) {
        throw new SeatTakenError();
      }

      const existing = await tx.ticket.findFirst({
        where: { scheduleId, seatNo, status: { not: TicketStatus.CANCELLED } },
      });
      if (existing) throw new SeatTakenError();

      // Telegram users have no phone number, so we store "tg:<id>" in whatsappPhone for now.
      const customer = await tx.customer.upsert({
        where: { whatsappPhone: `tg:${telegramUserId}` },
        update: { name: passengerName },
        create: { whatsappPhone: `tg:${telegramUserId}`, name: passengerName },
      });

      const ticketId = `TKT-${randomBytes(5).toString('hex').toUpperCase()}`;
      const orderId = `ORD-${randomBytes(5).toString('hex').toUpperCase()}`;
      const signature = this.sign(ticketId, scheduleId, seatNo);

      const created = await tx.ticket.create({
        data: {
          ticketId,
          orderId,
          agencyId: schedule.agencyId,
          scheduleId,
          customerId: customer.id,
          seatNo,
          amount: schedule.pricePerSeat,
          status: TicketStatus.CONFIRMED,
          qrCodeSignature: signature,
        },
        include: { schedule: { include: { agency: true } } },
      });

      await tx.routeSchedule.update({
        where: { id: scheduleId },
        data: { bookedSeats: { increment: 1 } },
      });

      return created;
    });

    void this.notificationsService.notify(
      ticket.agencyId,
      NotificationType.TICKET_SALE,
      'New ticket sold',
      `${passengerName} booked seat ${seatNo} on ${ticket.schedule.origin} → ${ticket.schedule.destination}.`,
    );

    const seatsLeft = ticket.schedule.totalSeats - (ticket.schedule.bookedSeats + 1);
    if (seatsLeft <= 5 && seatsLeft >= 0) {
      void this.notificationsService.notify(
        ticket.agencyId,
        NotificationType.INVENTORY_ALERT,
        'Inventory alert',
        `${ticket.schedule.busName || 'Route'} has ${seatsLeft} seat${seatsLeft === 1 ? '' : 's'} remaining.`,
      );
    }

    // The scanner will later verify `ticketId.signature` with the same secret.
    const qr = await QRCode.toBuffer(`${ticket.ticketId}.${ticket.qrCodeSignature}`, {
      width: 480,
      margin: 2,
    });

    return { ticket, qr };
  }
}