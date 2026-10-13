import { Controller, Get, UseGuards } from '@nestjs/common';
import { ClerkAuthGuard } from '../auth/clerk/clerk-auth.guard';
import { CurrentAgent } from '../auth/clerk/current-agent.decorator';
import type { CurrentAgentContext } from '../auth/clerk/current-agent.decorator';
import { DashboardService, DashboardSummary } from './dashboard.service';

@Controller('dashboard')
@UseGuards(ClerkAuthGuard)
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  async getSummary(@CurrentAgent() agent: CurrentAgentContext): Promise<DashboardSummary> {
    return this.dashboardService.getSummary(agent.agencyId);
  }
}
