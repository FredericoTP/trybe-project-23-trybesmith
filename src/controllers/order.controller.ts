import { Response, Request } from 'express';
import OrderService from '../services/order.service';
import { mapError } from '../utils/errorMap';

class OrderController {
  orderService: OrderService;

  constructor(orderService = new OrderService()) {
    this.orderService = orderService;
    this.getAll = this.getAll.bind(this);
  }

  async getAll(_req: Request, res: Response) {
    const { type, message } = await this.orderService.getAll();

    if (type) return res.status(mapError(type)).json({ message });

    return res.status(200).json(message);
  }
}

export default OrderController;