import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ClerkAuthGuard } from '../auth/clerk/clerk-auth.guard';
import { CurrentAgent } from '../auth/clerk/current-agent.decorator';
import type { CurrentAgentContext } from '../auth/clerk/current-agent.decorator';
import { AgenciesService } from './agencies.service';
import type { AgencyScheduleSummary } from './agencies.service';
import type { AgencyProfile, UpdateAgencyProfileInput } from './agencies.service';

interface CreateAgencyScheduleBody {
  origin: string;
  destination: string;
  departureTime: string;
  busNumber: string;
  busName: string;
  busType: string;
  pricePerSeat: number;
  totalSeats?: number;
}

@Controller('agencies')
@UseGuards(ClerkAuthGuard)
export class AgenciesController {
  constructor(private readonly agenciesService: AgenciesService) {}

  @Get('profile')
  async getProfile(
    @CurrentAgent() agent: CurrentAgentContext,
  ): Promise<AgencyProfile> {
    return this.agenciesService.getProfile(agent);
  }

  @Patch('profile')
  async updateProfile(
    @CurrentAgent() agent: CurrentAgentContext,
    @Body() body: UpdateAgencyProfileInput,
  ): Promise<AgencyProfile> {
    return this.agenciesService.updateProfile(agent, body);
  }

  @Delete('profile/account')
  async deleteAccount(
    @CurrentAgent() agent: CurrentAgentContext,
  ): Promise<{ success: true }> {
    return this.agenciesService.deleteMyAccount(agent);
  }

  @Get('schedules')
  async getSchedules(
    @CurrentAgent() agent: CurrentAgentContext,
  ): Promise<AgencyScheduleSummary[]> {
    return this.agenciesService.getAgencySchedules(agent.agencyId);
  }

  @Post('schedules')
  async createSchedule(
    @CurrentAgent() agent: CurrentAgentContext,
    @Body() body: CreateAgencyScheduleBody,
  ): Promise<AgencyScheduleSummary> {
    return this.agenciesService.createAgencySchedule(agent.agencyId, body);
  }

  @Get('schedules/:scheduleId/booked-seats')
  async getBookedSeatNumbers(
    @Param('scheduleId') scheduleId: string,
    @CurrentAgent() agent: CurrentAgentContext,
  ): Promise<number[]> {
    return this.agenciesService.getBookedSeatNumbers(scheduleId, agent.agencyId);
  }
}
