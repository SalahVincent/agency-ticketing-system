import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ClerkAuthGuard } from '../auth/clerk/clerk-auth.guard';
import { CurrentAgent } from '../auth/clerk/current-agent.decorator';
import type { CurrentAgentContext } from '../auth/clerk/current-agent.decorator';
import { AgenciesService } from './agencies.service';
import type { AgencyScheduleSummary } from './agencies.service';

@Controller('agencies')
@UseGuards(ClerkAuthGuard)
export class AgenciesController {
  constructor(private readonly agenciesService: AgenciesService) {}

  @Get('schedules')
  async getSchedules(
    @CurrentAgent() agent: CurrentAgentContext,
  ): Promise<AgencyScheduleSummary[]> {
    return this.agenciesService.getAgencySchedules(agent.agencyId);
  }

  @Get('schedules/:scheduleId/booked-seats')
  async getBookedSeatNumbers(
    @Param('scheduleId') scheduleId: string,
    @CurrentAgent() agent: CurrentAgentContext,
  ): Promise<number[]> {
    return this.agenciesService.getBookedSeatNumbers(scheduleId, agent.agencyId);
  }
}
