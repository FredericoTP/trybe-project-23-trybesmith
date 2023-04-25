import ProductModel from '../models/product.model';
import connection from '../models/connection';
import { Product, ProductAdd, ProductError } from '../interfaces/product.interface';
import validateProduct from './validations/validationInputValues';

class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async addProduct(product: Product): Promise<ProductAdd | ProductError> {
    const error = validateProduct(product);
    if (error.type) return error;

    const newProduct = await this.model.addProduct(product);

    return { type: null, message: newProduct };
  }
}

export default ProductService;