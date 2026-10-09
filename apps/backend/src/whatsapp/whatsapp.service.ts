import { Injectable } from '@nestjs/common';
import { WhatsappOutboundService } from './whatsapp-outbound.service';
import { AgenciesService } from '../agencies/agencies.service';

@Injectable()
export class WhatsappService {
  constructor(
    private readonly outbound: WhatsappOutboundService,
    private readonly agenciesService: AgenciesService,
  ) {}

  async processInboundPayload(body: any) {
    const entry = body.entry?.[0];
    const changes = entry?.changes?.[0];
    const value = changes?.value;
    const message = value?.messages?.[0];

    if (!message) return;

    const senderPhone = message.from;
    const messageType = message.type;

    
    if (messageType === 'text') {
      await this.outbound.sendWelcomeMenu(senderPhone);
      return;
    }

    
    if (messageType === 'interactive') {
      const interactive = message.interactive;

      
      if (interactive.type === 'button_reply') {
        const buttonId = interactive.button_reply.id;

        if (buttonId === 'BTN_SELECT_AGENCY') {
          const agencies = await this.agenciesService.getActiveAgencies();
          await this.outbound.sendAgencyList(senderPhone, agencies);
        }
      }

      
      if (interactive.type === 'list_reply') {
        const selectedId = interactive.list_reply.id;

        if (selectedId.startsWith('AGENCY_')) {
          const agencyId = selectedId.replace('AGENCY_', '');
          const schedules = await this.agenciesService.getAgencySchedules(agencyId);
          await this.outbound.sendSchedulesList(senderPhone, schedules);
        }
      }
    }
  }
}