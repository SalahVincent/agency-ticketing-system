import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { createClerkClient } from '@clerk/backend';
import { BusType, Prisma, ScheduleStatus } from '@agency-ticketing/database';
import type { CurrentAgentContext } from '../auth/clerk/current-agent.decorator';
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

export interface AgencyProfile {
  agency: {
    id: string;
    name: string;
    agencyCode: string;
    hqLocation: string;
    primaryRoutes: string;
    activeFleetCount: string;
    serviceType: string | null;
  };
  agent: {
    name: string;
    email: string;
    phone: string;
    agentCode: string;
    role: string;
    station: string;
    shiftStatus: 'ON_DUTY' | 'OFF_DUTY';
    memberSince: string;
  } | null;
}

export interface RegisterAgencyInput {
  agencyName?: string;
  agentName?: string;
  agentPhone?: string;
  hqLocation?: string;
  primaryRoutes?: string;
  activeFleetCount?: string;
  serviceType?: string;
  terminalName?: string;
}

export interface UpdateAgencyProfileInput {
  agencyName?: string;
  hqLocation?: string;
  primaryRoutes?: string;
  activeFleetCount?: string;
  serviceType?: string;
  agentPhone?: string;
  station?: string;
  shiftStatus?: 'ON_DUTY' | 'OFF_DUTY';
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
    input: RegisterAgencyInput = {},
  ): Promise<RegisteredAgency> {
    const secretKey = process.env.CLERK_SECRET_KEY;
    if (!secretKey) {
      throw new InternalServerErrorException('CLERK_SECRET_KEY is not configured');
    }

    const clerk = createClerkClient({ secretKey });
    const user = await clerk.users.getUser(clerkUserId);
    if (user.primaryEmailAddress?.verification?.status !== 'verified') {
      throw new BadRequestException('Verify your email address before linking an agent profile.');
    }
    const linkedAgencyId = user.publicMetadata.agencyId;

    if (typeof linkedAgencyId === 'string' && linkedAgencyId) {
      const existingAgency = await this.prisma.agency.findUnique({
        where: { id: linkedAgencyId },
        select: { id: true, name: true },
      });
      if (!existingAgency) {
        throw new ConflictException('This account is linked to an unknown agency');
      }

      await this.updateAgencyFromRegistration(existingAgency.id, input);
      await this.ensureAgentProfile(user, existingAgency.id, input);
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
        await this.updateAgencyFromRegistration(existingAgent.agency.id, input);
        await this.ensureAgentProfile(user, existingAgent.agency.id, input);
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
    const agencyName = input.agencyName?.trim() ||
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
        hqLocation: input.hqLocation?.trim() || 'Not set',
        primaryRoutes: input.primaryRoutes?.trim() || 'Not set',
        activeFleetCount: input.activeFleetCount?.trim() || '0',
        serviceType: input.serviceType?.trim() || null,
        terminalName: input.terminalName?.trim() || input.hqLocation?.trim() || null,
      },
      select: { id: true, name: true },
    });

    await this.ensureAgentProfile(user, agency.id, input);

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

  private async updateAgencyFromRegistration(
    agencyId: string,
    input: RegisterAgencyInput,
  ): Promise<void> {
    const data: Prisma.AgencyUpdateInput = {};
    if (input.agencyName?.trim()) data.name = input.agencyName.trim();
    if (input.hqLocation?.trim()) data.hqLocation = input.hqLocation.trim();
    if (input.primaryRoutes?.trim()) data.primaryRoutes = input.primaryRoutes.trim();
    if (input.activeFleetCount?.trim()) data.activeFleetCount = input.activeFleetCount.trim();
    if (input.serviceType?.trim()) data.serviceType = input.serviceType.trim();
    if (input.terminalName?.trim()) data.terminalName = input.terminalName.trim();
    if (Object.keys(data).length) {
      await this.prisma.agency.update({ where: { id: agencyId }, data });
    }
  }

  private async ensureAgentProfile(
    user: any,
    agencyId: string,
    input: RegisterAgencyInput,
  ): Promise<void> {
    const email = user.primaryEmailAddress?.emailAddress;
    if (!email) throw new BadRequestException('A verified email is required for the agent profile.');

    const linkedAgent = await this.prisma.agent.findUnique({
      where: { clerkUserId: user.id },
    });
    const existingAgent = linkedAgent ?? await this.prisma.agent.findFirst({
      where: { email: { equals: email, mode: 'insensitive' } },
    });

    if (existingAgent && existingAgent.agencyId !== agencyId) {
      throw new ConflictException('This email is already assigned to another agency.');
    }
    const name = input.agentName?.trim() || existingAgent?.name || user.fullName || email.split('@')[0];
    const phone = input.agentPhone?.trim() || existingAgent?.phone || user.primaryPhoneNumber?.phoneNumber || '';
    const station = input.terminalName?.trim() || input.hqLocation?.trim() || existingAgent?.station || 'Not set';

    if (existingAgent) {
      await this.prisma.agent.update({
        where: { id: existingAgent.id },
        data: {
          clerkUserId: user.id,
          ...(input.agentName?.trim() ? { name } : {}),
          ...(input.agentPhone?.trim() ? { phone } : {}),
          ...(input.terminalName?.trim() || input.hqLocation?.trim() ? { station } : {}),
        },
      });
      return;
    }

    await this.prisma.agent.create({
      data: {
        agencyId,
        agentCode: `CLERK-${user.id.toUpperCase()}`,
        clerkUserId: user.id,
        name,
        email,
        password: null,
        phone,
        role: 'AGENCY_ADMIN',
        station,
      },
    });
  }

  async getProfile(agent: CurrentAgentContext): Promise<AgencyProfile> {
    const [agency, clerkAgent] = await Promise.all([
      this.prisma.agency.findUnique({
        where: { id: agent.agencyId },
        select: {
          id: true,
          name: true,
          agencyCode: true,
          hqLocation: true,
          primaryRoutes: true,
          activeFleetCount: true,
          serviceType: true,
        },
      }),
      this.prisma.agent.findUnique({
        where: { clerkUserId: agent.clerkUserId },
        select: {
          name: true,
          email: true,
          phone: true,
          agentCode: true,
          role: true,
          station: true,
          shiftStatus: true,
          createdAt: true,
        },
      }),
    ]);

    if (!agency) throw new NotFoundException('Agency profile not found.');
    return {
      agency,
      agent: clerkAgent
        ? { ...clerkAgent, memberSince: clerkAgent.createdAt.toISOString() }
        : null,
    };
  }

  async updateProfile(
    currentAgent: CurrentAgentContext,
    input: UpdateAgencyProfileInput,
  ): Promise<AgencyProfile> {
    const agent = await this.prisma.agent.findUnique({
      where: { clerkUserId: currentAgent.clerkUserId },
      select: { id: true, agencyId: true },
    });
    if (!agent || agent.agencyId !== currentAgent.agencyId) {
      throw new NotFoundException('Agent profile not found. Please complete registration again.');
    }

    const agencyData: Prisma.AgencyUpdateInput = {};
    const setRequiredText = (
      key: 'name' | 'hqLocation' | 'primaryRoutes' | 'activeFleetCount',
      value: string | undefined,
    ) => {
      if (value === undefined) return;
      const cleaned = value.trim();
      if (!cleaned || cleaned.length > 160) {
        throw new BadRequestException('Required profile fields must contain 1 to 160 characters.');
      }
      agencyData[key] = cleaned;
    };

    setRequiredText('name', input.agencyName);
    setRequiredText('hqLocation', input.hqLocation);
    setRequiredText('primaryRoutes', input.primaryRoutes);
    setRequiredText('activeFleetCount', input.activeFleetCount);
    if (input.serviceType !== undefined) {
      const value = input.serviceType.trim();
      if (value.length > 160) throw new BadRequestException('Service type must be 160 characters or fewer.');
      agencyData.serviceType = value || null;
    }

    const agentData: Prisma.AgentUpdateInput = {};
    if (input.agentPhone !== undefined) {
      const value = input.agentPhone.trim();
      if (!value || value.length > 40) throw new BadRequestException('Enter a valid phone number.');
      agentData.phone = value;
    }
    if (input.station !== undefined) {
      const value = input.station.trim();
      if (!value || value.length > 160) throw new BadRequestException('Assigned terminal cannot be empty.');
      agentData.station = value;
    }
    if (input.shiftStatus !== undefined) {
      if (input.shiftStatus !== 'ON_DUTY' && input.shiftStatus !== 'OFF_DUTY') {
        throw new BadRequestException('Choose a valid duty status.');
      }
      agentData.shiftStatus = input.shiftStatus;
    }

    await this.prisma.$transaction(async (tx) => {
      if (Object.keys(agencyData).length) {
        await tx.agency.update({ where: { id: currentAgent.agencyId }, data: agencyData });
      }
      if (Object.keys(agentData).length) {
        await tx.agent.update({ where: { id: agent.id }, data: agentData });
      }
    });

    return this.getProfile(currentAgent);
  }

  async deleteMyAccount(currentAgent: CurrentAgentContext): Promise<{ success: true }> {
    const secretKey = process.env.CLERK_SECRET_KEY;
    if (!secretKey) throw new InternalServerErrorException('CLERK_SECRET_KEY is not configured');

    const agent = await this.prisma.agent.findUnique({
      where: { clerkUserId: currentAgent.clerkUserId },
      select: { id: true },
    });
    if (!agent) throw new NotFoundException('Agent profile not found.');

    // Keep the agency's records, but detach this agent so a verified account
    // recreated with the same email can safely claim the existing profile.
    await this.prisma.agent.update({
      where: { id: agent.id },
      data: { clerkUserId: null },
    });

    try {
      const clerk = createClerkClient({ secretKey });
      await clerk.users.deleteUser(currentAgent.clerkUserId);
    } catch {
      await this.prisma.agent.updateMany({
        where: { id: agent.id, clerkUserId: null },
        data: { clerkUserId: currentAgent.clerkUserId },
      });
      throw new InternalServerErrorException('Could not delete the account. Please try again.');
    }

    this.clerkAuthGuard.invalidateUserCache(currentAgent.clerkUserId);
    return { success: true };
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
