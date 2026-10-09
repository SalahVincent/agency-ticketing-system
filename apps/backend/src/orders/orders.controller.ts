import { Controller, Get, Query } from '@nestjs/common';
import { OrderListItem, OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getOrders(@Query('agencyId') agencyId?: string): Promise<OrderListItem[]> {
    // TODO: replace this with the agency from the JWT once agent login exists.
    return this.ordersService.getOrders({ agencyId });
  }
}
