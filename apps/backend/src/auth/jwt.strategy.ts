
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'super-secret-jwt-key-camewego',
    });
  }

  async validate(payload: { sub: string; email: string }) {
    const agent = await this.prisma.agent.findUnique({
      where: { id: payload.sub },
    });

    if (!agent) {
      throw new UnauthorizedException('Agent account not found');
    }

    
    const { password, ...result } = agent;
    return result;
  }
}