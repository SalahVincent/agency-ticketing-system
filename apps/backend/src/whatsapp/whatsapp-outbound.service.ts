import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WhatsappOutboundService {
  private readonly graphApiUrl: string;
  private readonly token: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    const phoneNumberId = this.configService.get<string>('WHATSAPP_PHONE_NUMBER_ID') || '';
    this.token = this.configService.get<string>('WHATSAPP_API_TOKEN') || '';
    this.graphApiUrl = `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`;
  }

  // Welcome message with interactive buttons
  async sendWelcomeMenu(to: string) {
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to,
      type: 'interactive',
      interactive: {
        type: 'button',
        body: { text: 'Welcome to CAMEWEGO! 🚌\nHow would you like to search for your travel ticket today?' },
        action: {
          buttons: [
            { type: 'reply', reply: { id: 'BTN_SELECT_AGENCY', title: 'Select Agency' } },
            { type: 'reply', reply: { id: 'BTN_SEARCH_ROUTES', title: 'Search Routes' } },
          ],
        },
      },
    };

    return this.dispatch(payload);
  }

  // Interactive list matching Agency model
  async sendAgencyList(to: string, agencies: Array<{ id: string; name: string; hqLocation: string }>) {
    const rows = agencies.map((agency) => ({
      id: `AGENCY_${agency.id}`,
      title: agency.name.substring(0, 24),
      description: `HQ: ${agency.hqLocation}`.substring(0, 72),
    }));

    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to,
      type: 'interactive',
      interactive: {
        type: 'list',
        header: { type: 'text', text: 'CAMEWEGO Partners' },
        body: { text: 'Select an agency below to view their active routes & departures:' },
        footer: { text: 'Tap below to select' },
        action: {
          button: 'Choose Agency',
          sections: [
            {
              title: 'Available Agencies',
              rows,
            },
          ],
        },
      },
    };

    return this.dispatch(payload);
  }

  // Send schedule options for selected agency
  async sendSchedulesList(to: string, schedules: any[]) {
    if (schedules.length === 0) {
      return this.sendTextMessage(to, 'No upcoming schedules found for this agency at the moment.');
    }

    const rows = schedules.map((sch) => ({
      id: `SCH_${sch.id}`,
      title: `${sch.origin} -> ${sch.destination}`.substring(0, 24),
      description: `${sch.departureTime} | ${sch.pricePerSeat} XAF | ${sch.busType}`.substring(0, 72),
    }));

    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to,
      type: 'interactive',
      interactive: {
        type: 'list',
        header: { type: 'text', text: 'Available Departures' },
        body: { text: 'Select a departure schedule to proceed with booking:' },
        footer: { text: 'Tap to view trip' },
        action: {
          button: 'Select Schedule',
          sections: [
            {
              title: 'Schedules',
              rows,
            },
          ],
        },
      },
    };

    return this.dispatch(payload);
  }

  async sendTextMessage(to: string, text: string) {
    const payload = {
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { body: text },
    };
    return this.dispatch(payload);
  }

  private async dispatch(data: any) {
    return this.httpService.axiosRef.post(this.graphApiUrl, data, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
    });
  }
}