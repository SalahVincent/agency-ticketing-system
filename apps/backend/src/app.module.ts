// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';
// import { AuthModule } from './auth/auth.module';
// import { OrdersModule } from './orders/orders.module';
// import { ScannerModule } from './scanner/scanner.module';
// import { SchedulesModule } from './schedules/schedules.module';
// import { WhatsappModule } from './whatsapp/whatsapp.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    // AuthModule,
    // OrdersModule,
    // ScannerModule,
    // SchedulesModule,
    // WhatsappModule,
  ],
})
export class AppModule {}