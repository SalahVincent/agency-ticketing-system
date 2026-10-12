import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ClerkAuthGuard } from '../auth/clerk/clerk-auth.guard';
import { CurrentAgent } from '../auth/clerk/current-agent.decorator';
import type { CurrentAgentContext } from '../auth/clerk/current-agent.decorator';
import { ScannerService, ScannerValidationResponse } from './scanner.service';

interface ValidateTicketBody {
  code?: string;
}

@Controller('scanner')
@UseGuards(ClerkAuthGuard)
export class ScannerController {
  constructor(private readonly scannerService: ScannerService) {}

  @Post('validate')
  @HttpCode(HttpStatus.OK)
  async validate(
    @Body() body: ValidateTicketBody,
    @CurrentAgent() agent: CurrentAgentContext,
  ): Promise<ScannerValidationResponse> {
    return this.scannerService.validateTicket(body.code ?? '', agent);
  }
}
