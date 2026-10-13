import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { createClerkClient } from '@clerk/backend';
import { BusType, Prisma, ScheduleStatus } from '@agency-ticketing/database';
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

export interface CreateAgencyScheduleInput {
  origin: string;
  destination: string;
  departureTime: string;
  busNumber: string;
  busName: string;
  busType: string;
  pricePerSeat: number;
  totalSeats?: number;
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

  async createAgencySchedule(
    agencyId: string,
    input: CreateAgencyScheduleInput,
  ): Promise<AgencyScheduleSummary> {
    const origin = input.origin?.trim();
    const destination = input.destination?.trim();
    const busNumber = input.busNumber?.trim();
    const busName = input.busName?.trim();
    const departureTime = this.normalizeDepartureTime(input.departureTime);
    const pricePerSeat = Number(input.pricePerSeat);

    if (!origin || !destination) {
      throw new BadRequestException('Origin and destination are required.');
    }
    if (!busNumber || !busName) {
      throw new BadRequestException('Bus number and bus name are required.');
    }
    if (!Number.isFinite(pricePerSeat) || pricePerSeat <= 0) {
      throw new BadRequestException('Price per seat must be a positive number.');
    }

    const busTypeMap: Record<string, BusType> = {
      minibus: BusType.MINIBUS,
      coaster: BusType.COASTER,
      ultra_vip: BusType.ULTRA_VIP,
      vip_2x2: BusType.VIP_2X2,
      classic_3x2: BusType.CLASSIC_3X2,
      MINIBUS: BusType.MINIBUS,
      COASTER: BusType.COASTER,
      ULTRA_VIP: BusType.ULTRA_VIP,
      VIP_2X2: BusType.VIP_2X2,
      CLASSIC_3X2: BusType.CLASSIC_3X2,
    };
    const normalizedBusType = busTypeMap[input.busType];
    if (!normalizedBusType) {
      throw new BadRequestException('A valid bus type is required.');
    }

    const defaultSeatCapacities: Record<BusType, number> = {
      [BusType.MINIBUS]: 19,
      [BusType.COASTER]: 26,
      [BusType.ULTRA_VIP]: 30,
      [BusType.VIP_2X2]: 49,
      [BusType.CLASSIC_3X2]: 61,
    };

    const totalSeats =
      Number.isFinite(Number(input.totalSeats)) && Number(input.totalSeats) > 0
        ? Number(input.totalSeats)
        : defaultSeatCapacities[normalizedBusType];

    return this.prisma.routeSchedule.create({
      data: {
        agencyId,
        origin,
        destination,
        departureTime,
        busNumber,
        busName,
        busType: normalizedBusType,
        totalSeats,
        bookedSeats: 0,
        pricePerSeat,
        status: ScheduleStatus.ON_TIME,
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
    });
  }

  private normalizeDepartureTime(value: string): string {
    const cleaned = value?.trim();
    if (!cleaned) {
      throw new BadRequestException('Departure time is required.');
    }

    const directMatch = cleaned.match(/^\d{1,2}:\d{2}(?:\s?[AaPp][Mm])?$/);
    if (directMatch) {
      const [timePart, periodPart] = cleaned.split(/\s+/);
      const [hoursRaw, minutesRaw] = timePart.split(':');
      const hour = Number(hoursRaw);
      const minute = Number(minutesRaw);
      if (!Number.isFinite(hour) || !Number.isFinite(minute) || minute < 0 || minute > 59) {
        throw new BadRequestException('Departure time must be a valid clock time.');
      }

      const normalizedHour = Number(periodPart ? hour : (hour % 12 === 0 ? 12 : hour % 12));
      const suffix = /pm/i.test(periodPart || (hour >= 12 ? 'PM' : 'AM')) ? 'PM' : 'AM';
      const finalHour = normalizedHour === 0 ? 12 : normalizedHour;
      return `${String(finalHour).padStart(2, '0')}:${String(minute).padStart(2, '0')} ${suffix}`;
    }

    const parsedDate = new Date(cleaned);
    if (Number.isNaN(parsedDate.getTime())) {
      throw new BadRequestException('Departure time must be a valid time string.');
    }

    const hours = parsedDate.getHours();
    const minutes = parsedDate.getMinutes();
    const suffix = hours >= 12 ? 'PM' : 'AM';
    const normalizedHour = hours % 12 === 0 ? 12 : hours % 12;
    return `${String(normalizedHour).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${suffix}`;
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