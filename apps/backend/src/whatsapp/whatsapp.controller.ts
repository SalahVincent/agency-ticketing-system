import { Controller, Get, Post, Query, Body, HttpCode, HttpStatus, ForbiddenException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WhatsappService } from './whatsapp.service';

@Controller('whatsapp')
export class WhatsappController {
  constructor(
    private readonly whatsappService: WhatsappService,
    private readonly configService: ConfigService,
  ) {}

  @Get('webhook')
  verifyWebhook(
    @Query('hub.mode') mode: string,
    @Query('hub.verify_token') token: string,
    @Query('hub.challenge') challenge: string,
  ) {
    const verifyToken =
      this.configService.get<string>('WHATSAPP_VERIFY_TOKEN') || 'camewego_dev_verify_secret_123';

    if (mode === 'subscribe' && token === verifyToken) {
      console.log('WhatsApp Webhook successfully verified!');
      return challenge;
    }

    console.error(`Verification failed. Received token: "${token}", Expected: "${verifyToken}"`);
    throw new ForbiddenException('Verification failed');
  }

  @Post('webhook')
  @HttpCode(HttpStatus.OK)
  async handleInbound(@Body() body: any) {
    await this.whatsappService.processInboundPayload(body);
    return { status: 'EVENT_RECEIVED' };
  }
}