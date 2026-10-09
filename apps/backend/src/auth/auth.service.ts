
import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterAgentDto, LoginDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterAgentDto) {
    const existingAgent = await this.prisma.agent.findUnique({
      where: { email: dto.email },
    });

    if (existingAgent) {
      throw new ConflictException('An agent with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const agent = await this.prisma.agent.create({
      data: {
        ...dto,
        password: hashedPassword,
      },
    });

    const { password, ...result } = agent;
    return result;
  }

  async login(dto: LoginDto) {
    const agent = await this.prisma.agent.findUnique({
      where: { email: dto.email },
    });

    if (!agent) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, agent.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: agent.id, email: agent.email, role: agent.role };

    return {
      accessToken: this.jwtService.sign(payload),
      agent: {
        id: agent.id,
        name: agent.name,
        email: agent.email,
        agentCode: agent.agentCode,
        role: agent.role,
        station: agent.station,
        shiftStatus: agent.shiftStatus,
      },
    };
  }
}