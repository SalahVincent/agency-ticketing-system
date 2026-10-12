import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { AgenciesService } from './agencies.service';
import { AgenciesController } from './agencies.controller';
import { AgencyRegistrationController } from './agency-registration.controller';

@Module({
  imports: [AuthModule],
  providers: [AgenciesService],
  controllers: [AgenciesController, AgencyRegistrationController],
  exports: [AgenciesService],
})
export class AgenciesModule {}
