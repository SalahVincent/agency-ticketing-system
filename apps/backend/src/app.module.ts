import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { AgenciesModule } from './agencies/agencies.module';
import { TelegramModule } from './telegram/telegram.module';
import { ScannerModule } from './scanner/scanner.module';
import { OrdersModule } from './orders/orders.module';
// import { SchedulesModule } from './schedules/schedules.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        // Fails at startup with a clear message if the token is missing.
        token: configService.getOrThrow<string>('TELEGRAM_BOT_TOKEN'),
      }),
      inject: [ConfigService],
    }),
    PrismaModule,
    AuthModule,
    AgenciesModule,
    WhatsappModule,
    TelegramModule,
    ScannerModule,
    OrdersModule,
    // SchedulesModule,
  ],
})
export class AppModule {}