import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AgenciesService {
  constructor(private prisma: PrismaService) {}

  async getActiveAgencies() {
    return this.prisma.agency.findMany({
      select: {
        id: true,
        name: true,
        agencyCode: true,
        hqLocation: true,
      },
    });
  }

  async getAgencySchedules(agencyId: string) {
    return this.prisma.routeSchedule.findMany({
      where: {
        agencyId,
        status: 'ON_TIME',
      },
      select: {
        id: true,
        origin: true,
        destination: true,
        departureTime: true,
        busName: true,
        busType: true,
        pricePerSeat: true,
        totalSeats: true,
        bookedSeats: true,
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  // Gets occupied seat numbers for a schedule grid
  async getBookedSeatNumbers(scheduleId: string): Promise<number[]> {
    const tickets = await this.prisma.ticket.findMany({
      where: {
        scheduleId,
        status: { in: ['CONFIRMED', 'BOARDED'] },
      },
      select: { seatNo: true },
    });

    return tickets
      .map((t) => parseInt(t.seatNo, 10))
      .filter((seatNum) => !isNaN(seatNum));
  }
}