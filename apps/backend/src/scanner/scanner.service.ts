import { Injectable } from '@nestjs/common';
import { createHmac } from 'crypto';
import { Prisma, TicketStatus } from '@agency-ticketing/database';
import { PrismaService } from '../prisma/prisma.service';
import type { CurrentAgentContext } from '../auth/clerk/current-agent.decorator';

export interface ScannerTicketSummary {
  ticketId: string;
  passengerName: string;
  seatNo: string;
  route: string;
  departureTime: string;
  agencyName: string;
  boardedAt: string | null;
}

export type ScannerResult = 'VERIFIED' | 'ALREADY_BOARDED' | 'INVALID' | 'CANCELLED' | 'ERROR';

export interface ScannerValidationResponse {
  result: ScannerResult;
  message: string;
  ticket?: ScannerTicketSummary;
}

interface TicketRecord {
  id: string;
  ticketId: string;
  qrCodeSignature: string;
  status: TicketStatus;
  seatNo: string;
  boardedAt: Date | null;
  customer: { name: string };
  schedule: {
    origin: string;
    destination: string;
    departureTime: string;
    agency: { name: string };
  };
}

@Injectable()
export class ScannerService {
  constructor(private readonly prisma: PrismaService) {}

  private async lookupTicket(ticketId: string, agencyId: string): Promise<TicketRecord | null> {
    return this.loadTicket({ ticketId, agencyId, schedule: { is: { agencyId } } });
  }

  private async lookupTicketForSignature(ticketId: string): Promise<TicketRecord | null> {
    return this.loadTicket({ ticketId });
  }

  private async loadTicket(where: Prisma.TicketWhereInput): Promise<TicketRecord | null> {
    const ticket = await this.prisma.ticket.findFirst({
      where,
      include: {
        customer: true,
        schedule: { include: { agency: true } },
      },
    });

    if (!ticket) {
      return null;
    }

    return {
      id: ticket.id,
      ticketId: ticket.ticketId,
      qrCodeSignature: ticket.qrCodeSignature,
      status: ticket.status,
      seatNo: ticket.seatNo,
      boardedAt: ticket.boardedAt,
      customer: { name: ticket.customer.name },
      schedule: {
        origin: ticket.schedule.origin,
        destination: ticket.schedule.destination,
        departureTime: ticket.schedule.departureTime,
        agency: { name: ticket.schedule.agency.name },
      },
    };
  }

  private toSummary(ticket: TicketRecord): ScannerTicketSummary {
    return {
      ticketId: ticket.ticketId,
      passengerName: ticket.customer.name,
      seatNo: ticket.seatNo,
      route: `${ticket.schedule.origin} → ${ticket.schedule.destination}`,
      departureTime: ticket.schedule.departureTime,
      agencyName: ticket.schedule.agency.name,
      boardedAt: ticket.boardedAt ? ticket.boardedAt.toISOString() : null,
    };
  }

  async validateTicket(
    code: string,
    agent: CurrentAgentContext,
  ): Promise<ScannerValidationResponse> {
    const rawCode = (code ?? '').trim();

    if (!rawCode) {
      return {
        result: 'INVALID',
        message: 'No ticket code was provided.',
      };
    }

    let ticketId = rawCode;
    let providedSignature = '';

    if (rawCode.includes('.')) {
      const [candidateTicketId, candidateSignature] = rawCode.split('.', 2);
      ticketId = candidateTicketId;
      providedSignature = candidateSignature ?? '';
    }

    const ticket = await this.lookupTicket(ticketId, agent.agencyId);

    if (!ticket) {
      return {
        result: 'INVALID',
        message: 'Ticket not found.',
      };
    }

    if (providedSignature && providedSignature !== ticket.qrCodeSignature) {
      return {
        result: 'INVALID',
        message: 'This ticket signature could not be verified.',
      };
    }

    if (ticket.status === TicketStatus.CANCELLED) {
      return {
        result: 'CANCELLED',
        message: 'This ticket was cancelled and cannot be used for boarding.',
        ticket: this.toSummary(ticket),
      };
    }

    if (ticket.status === TicketStatus.BOARDED) {
      return {
        result: 'ALREADY_BOARDED',
        message: 'This ticket has already been boarded.',
        ticket: this.toSummary(ticket),
      };
    }

    const matchingAgent = agent.email
      ? await this.prisma.agent.findFirst({
          where: { email: agent.email, agencyId: agent.agencyId },
          select: { id: true },
        })
      : null;

    const updatedTicket = await this.prisma.ticket.update({
      where: { id: ticket.id },
      data: {
        status: TicketStatus.BOARDED,
        boardedAt: new Date(),
        validatedById: matchingAgent?.id ?? null,
      },
      include: {
        customer: true,
        schedule: { include: { agency: true } },
      },
    });

    return {
      result: 'VERIFIED',
      message: 'Ticket verified successfully.',
      ticket: {
        ticketId: updatedTicket.ticketId,
        passengerName: updatedTicket.customer.name,
        seatNo: updatedTicket.seatNo,
        route: `${updatedTicket.schedule.origin} → ${updatedTicket.schedule.destination}`,
        departureTime: updatedTicket.schedule.departureTime,
        agencyName: updatedTicket.schedule.agency.name,
        boardedAt: updatedTicket.boardedAt ? updatedTicket.boardedAt.toISOString() : null,
      },
    };
  }

  async verifyTicketSignature(ticketId: string, signedCode: string): Promise<boolean> {
    const ticket = await this.lookupTicketForSignature(ticketId);
    if (!ticket) return false;

    const secret = process.env.TICKET_SIGNING_SECRET || 'demo-signing-secret';
    const expected = createHmac('sha256', secret)
      .update(`${ticketId}|${ticket.schedule.origin}|${ticket.seatNo}`)
      .digest('hex')
      .slice(0, 32);

    return expected === signedCode || ticket.qrCodeSignature === signedCode;
  }
}
