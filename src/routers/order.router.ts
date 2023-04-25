import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import tokenValidation from '../middlewares/validateToken';
import validateProductsId from '../middlewares/validateProductsId';

const ordersRouter = Router();

const orderController = new OrderController();

ordersRouter.get('/', orderController.getAll);

ordersRouter.post(
  '/',
  tokenValidation,
  validateProductsId,
  orderController.addOrder,
);

export default ordersRouter;