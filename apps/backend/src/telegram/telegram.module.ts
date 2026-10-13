import { Module } from '@nestjs/common';
import { TelegramUpdate } from './telegram.update';
import { TelegramBookingService } from './telegram-booking.service';
import { AgenciesModule } from '../agencies/agencies.module';
import { PrismaModule } from '../prisma/prisma.module';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [AgenciesModule, PrismaModule, NotificationsModule],
  providers: [TelegramUpdate, TelegramBookingService],
})
export class TelegramModule {}