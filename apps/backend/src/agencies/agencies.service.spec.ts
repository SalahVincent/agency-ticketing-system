import { Test, TestingModule } from '@nestjs/testing';
import { AgenciesService } from './agencies.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AgenciesService', () => {
  let service: AgenciesService;
  let prisma: {
    ticket: {
      findMany: jest.Mock;
    };
  };

  beforeEach(async () => {
    prisma = {
      ticket: {
        findMany: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AgenciesService,
        {
          provide: PrismaService,
          useValue: prisma,
        },
      ],
    }).compile();

    service = module.get<AgenciesService>(AgenciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return booked seat numbers in ascending layout order', async () => {
    prisma.ticket.findMany.mockResolvedValue([
      { seatNo: '12' },
      { seatNo: '5' },
      { seatNo: '8' },
      { seatNo: '1' },
    ]);

    await expect(service.getBookedSeatNumbers('schedule-123')).resolves.toEqual([
      1,
      5,
      8,
      12,
    ]);
  });
});
