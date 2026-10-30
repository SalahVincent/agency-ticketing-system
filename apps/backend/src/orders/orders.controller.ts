import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ClerkAuthGuard } from '../auth/clerk/clerk-auth.guard';
import { CurrentAgent } from '../auth/clerk/current-agent.decorator';
import type { CurrentAgentContext } from '../auth/clerk/current-agent.decorator';
import { OrderListItem, OrdersService } from './orders.service';

interface CreateManualTicketBody {
  scheduleId: string;
  seatNum?: number | null;
  passengerName: string;
  phone: string;
}

@Controller('orders')
@UseGuards(ClerkAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getOrders(@CurrentAgent() agent: CurrentAgentContext): Promise<OrderListItem[]> {
    return this.ordersService.getOrders(agent.agencyId);
  }

  @Post('book')
  async bookTicket(
    @CurrentAgent() agent: CurrentAgentContext,
    @Body() body: CreateManualTicketBody,
  ) {
    return this.ordersService.createManualTicket(agent.agencyId, body);
  }
}
