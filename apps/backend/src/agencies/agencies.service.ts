import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { createClerkClient } from '@clerk/backend';
import { Prisma } from '@agency-ticketing/database';
import { ClerkAuthGuard } from '../auth/clerk/clerk-auth.guard';
import { PrismaService } from '../prisma/prisma.service';

type ActiveAgencySummary = Prisma.AgencyGetPayload<{
  select: { id: true; name: true; agencyCode: true; hqLocation: true };
}>;

export type AgencyScheduleSummary = Prisma.RouteScheduleGetPayload<{
  select: {
    id: true;
    agencyId: true;
    origin: true;
    destination: true;
    departureTime: true;
    busName: true;
    busNumber: true;
    busType: true;
    pricePerSeat: true;
    totalSeats: true;
    bookedSeats: true;
    status: true;
  };
}>;

export interface RegisteredAgency {
  agencyId: string;
  agencyName: string;
}

@Injectable()
export class AgenciesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly clerkAuthGuard: ClerkAuthGuard,
  ) {}

  async registerAgencyForClerkUser(
    clerkUserId: string,
    requestedAgencyName?: string,
  ): Promise<RegisteredAgency> {
    const secretKey = process.env.CLERK_SECRET_KEY;
    if (!secretKey) {
      throw new InternalServerErrorException('CLERK_SECRET_KEY is not configured');
    }

    const clerk = createClerkClient({ secretKey });
    const user = await clerk.users.getUser(clerkUserId);
    const linkedAgencyId = user.publicMetadata.agencyId;

    if (typeof linkedAgencyId === 'string' && linkedAgencyId) {
      const existingAgency = await this.prisma.agency.findUnique({
        where: { id: linkedAgencyId },
        select: { id: true, name: true },
      });
      if (!existingAgency) {
        throw new ConflictException('This account is linked to an unknown agency');
      }

      this.clerkAuthGuard.invalidateUserCache(clerkUserId);
      return { agencyId: existingAgency.id, agencyName: existingAgency.name };
    }

    const primaryEmail = user.primaryEmailAddress?.emailAddress;
    if (primaryEmail) {
      const existingAgent = await this.prisma.agent.findFirst({
        where: { email: { equals: primaryEmail, mode: 'insensitive' } },
        select: { agency: { select: { id: true, name: true } } },
      });

      if (existingAgent) {
        await clerk.users.updateUserMetadata(clerkUserId, {
          publicMetadata: { ...user.publicMetadata, agencyId: existingAgent.agency.id },
        });
        this.clerkAuthGuard.invalidateUserCache(clerkUserId);
        return {
          agencyId: existingAgent.agency.id,
          agencyName: existingAgent.agency.name,
        };
      }
    }

    const unsafeAgencyName = user.unsafeMetadata.agencyName;
    const emailName = primaryEmail?.split('@')[0].replace(/[._-]+/g, ' ').trim();
    const agencyName = requestedAgencyName?.trim() ||
      (typeof unsafeAgencyName === 'string' ? unsafeAgencyName.trim() : '') ||
      (user.fullName ? `${user.fullName}'s Agency` : '') ||
      (emailName ? `${emailName} Agency` : 'New Agency');

    const agencyCode = `CLERK-${clerkUserId.toUpperCase()}`;
    const agency = await this.prisma.agency.upsert({
      where: { agencyCode },
      update: {},
      create: {
        name: agencyName,
        agencyCode,
        hqLocation: 'Not set',
        activeFleetCount: '0',
      },
      select: { id: true, name: true },
    });

    try {
      await clerk.users.updateUserMetadata(clerkUserId, {
        publicMetadata: { ...user.publicMetadata, agencyId: agency.id },
      });
    } catch {
      throw new InternalServerErrorException(
        'Agency created but account linking failed. Please retry registration.',
      );
    }

    this.clerkAuthGuard.invalidateUserCache(clerkUserId);
    return { agencyId: agency.id, agencyName: agency.name };
  }

  async getActiveAgencies(): Promise<ActiveAgencySummary[]> {
    return this.prisma.agency.findMany({
      select: {
        id: true,
        name: true,
        agencyCode: true,
        hqLocation: true,
      },
    });
  }

  async getAgencySchedules(agencyId: string): Promise<AgencyScheduleSummary[]> {
    return this.prisma.routeSchedule.findMany({
      where: {
        agencyId,
        status: { not: 'CANCELLED' },
      },
      select: {
        id: true,
        agencyId: true,
        origin: true,
        destination: true,
        departureTime: true,
        busName: true,
        busNumber: true,
        busType: true,
        pricePerSeat: true,
        totalSeats: true,
        bookedSeats: true,
        status: true,
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  // Gets occupied seat numbers for a schedule grid, ordered in the same way the frontend displays them.
  async getBookedSeatNumbers(scheduleId: string, agencyId: string): Promise<number[]> {
    const tickets = await this.prisma.ticket.findMany({
      where: {
        scheduleId,
        agencyId,
        status: { in: ['CONFIRMED', 'BOARDED'] },
      },
      select: { seatNo: true },
    });

    return tickets
      .map((t) => parseInt(t.seatNo, 10))
      .filter((seatNum) => !Number.isNaN(seatNum))
      .sort((a, b) => a - b);
  }
}