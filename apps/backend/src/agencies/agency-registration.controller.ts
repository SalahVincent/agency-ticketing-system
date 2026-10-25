import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ClerkSessionGuard } from '../auth/clerk/clerk-session.guard';
import { AgenciesService, RegisteredAgency } from './agencies.service';

interface RegisterAgencyBody {
  agencyName?: string;
  agentName?: string;
  agentPhone?: string;
  hqLocation?: string;
  primaryRoutes?: string;
  activeFleetCount?: string;
  serviceType?: string;
  terminalName?: string;
}

interface ClerkSessionRequest {
  clerkUserId: string;
}

@Controller('agencies')
@UseGuards(ClerkSessionGuard)
export class AgencyRegistrationController {
  constructor(private readonly agenciesService: AgenciesService) {}

  @Post('register')
  async register(
    @Body() body: RegisterAgencyBody,
    @Req() request: ClerkSessionRequest,
  ): Promise<RegisteredAgency> {
    return this.agenciesService.registerAgencyForClerkUser(
      request.clerkUserId,
      body,
    );
  }
}
