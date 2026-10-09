import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ScannerController } from './scanner.controller';
import { ScannerService } from './scanner.service';

@Module({
  imports: [PrismaModule],
  controllers: [ScannerController],
  providers: [ScannerService],
  exports: [ScannerService],
})
export class ScannerModule {}
