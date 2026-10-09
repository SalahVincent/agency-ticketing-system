import { Controller, Get, Query } from '@nestjs/common';
import { AgenciesService } from './agencies.service';

@Controller('agencies')
export class AgenciesController {
  constructor(private readonly agenciesService: AgenciesService) {}

  @Get('schedules')
  async getSchedules(@Query('agencyId') agencyId?: string) {
    if (agencyId) {
      return this.agenciesService.getAgencySchedules(agencyId);
    }

    return this.agenciesService.getAllSchedules();
  }
}
