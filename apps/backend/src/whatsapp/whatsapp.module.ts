import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WhatsappController } from './whatsapp.controller';
import { WhatsappService } from './whatsapp.service';
import { WhatsappOutboundService } from './whatsapp-outbound.service';
import { AgenciesModule } from '../agencies/agencies.module';

@Module({
  imports: [HttpModule, AgenciesModule],
  controllers: [WhatsappController],
  providers: [WhatsappService, WhatsappOutboundService],
  exports: [WhatsappService, WhatsappOutboundService],
})
export class WhatsappModule {}