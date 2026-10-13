
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { ClerkAuthGuard } from './clerk/clerk-auth.guard';
import { ClerkSessionGuard } from './clerk/clerk-session.guard';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'super-secret-jwt-key-camewego',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, ClerkAuthGuard, ClerkSessionGuard],
  exports: [AuthService, ClerkAuthGuard, ClerkSessionGuard],
})
export class AuthModule {}