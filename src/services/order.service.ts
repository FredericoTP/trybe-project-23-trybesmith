import OrdersModel from '../models/orders.model';
import ProductModel from '../models/product.model';
import connection from '../models/connection';
import { AllOrders } from '../interfaces/order.interface';
import { validateProductsIds } from './validations/validationInputValues';

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

  async addOrder(userId: number, productsIds: number[]) {
    const error = validateProductsIds(productsIds);
    
    if (error.type) return error;

    const newOrder = await this.orderModel.addOrder(userId);

    await Promise.all(productsIds.map(
      async (item) => this.productModel.updateProduct(item, newOrder),
    ));

    return { type: null, message: newOrder };
  }
}

export default OrderService;