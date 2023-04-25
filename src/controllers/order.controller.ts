import { Response, Request } from 'express';
import OrderService from '../services/order.service';
import { mapError } from '../utils/errorMap';
import LoginService from '../services/login.service';

class OrderController {
  orderService: OrderService;

  loginService: LoginService;

  constructor(orderService = new OrderService(), loginService = new LoginService()) {
    this.orderService = orderService;
    this.loginService = loginService;
    this.getAll = this.getAll.bind(this);
    this.addOrder = this.addOrder.bind(this);
  }

  async getAll(_req: Request, res: Response) {
    const { type, message } = await this.orderService.getAll();

    if (type) return res.status(mapError(type)).json({ message });

    return res.status(200).json(message);
  }

  async addOrder(req: Request, res: Response) {
    const { infoToken, productsIds } = req.body;

    const { type, message } = await this.orderService.addOrder(infoToken.id, productsIds);

    if (type) return res.status(mapError(type)).json({ message });

    return res.status(201).json({ userId: infoToken.id, productsIds });
  }
}

export default OrderController;