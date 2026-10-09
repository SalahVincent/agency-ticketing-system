import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ScannerService, ScannerValidationResponse } from './scanner.service';

interface ValidateTicketBody {
  code?: string;
}

@Controller('scanner')
export class ScannerController {
  constructor(private readonly scannerService: ScannerService) {}

  @Post('validate')
  @HttpCode(HttpStatus.OK)
  async validate(@Body() body: ValidateTicketBody): Promise<ScannerValidationResponse> {
    return this.scannerService.validateTicket(body.code ?? '');
  }
}
