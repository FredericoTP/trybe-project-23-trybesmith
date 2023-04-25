import OrdersModel from '../models/orders.model';
import ProductModel from '../models/product.model';
import connection from '../models/connection';
import { AllOrders } from '../interfaces/order.interface';

class OrderService {
  orderModel: OrdersModel;

  productModel: ProductModel;

  constructor() {
    this.orderModel = new OrdersModel(connection);
    this.productModel = new ProductModel(connection);
  }

  async getAll(): Promise<AllOrders> {
    const orders = await this.orderModel.getAll();

    return { type: null, message: orders };
  }
}

export default OrderService;