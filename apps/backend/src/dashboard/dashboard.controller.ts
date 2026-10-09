import { Controller, Get, Query } from '@nestjs/common';
import { DashboardService, DashboardSummary } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  async getSummary(@Query('agencyId') agencyId?: string): Promise<DashboardSummary> {
    // TODO: replace this with the agency from the JWT once agent login exists.
    return this.dashboardService.getSummary({ agencyId });
  }
}
