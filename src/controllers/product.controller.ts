import { Response, Request } from 'express';
import ProductService from '../services/product.service';
import { mapError } from '../utils/errorMap';

class ProductController {
  productService: ProductService;

  constructor(productService = new ProductService()) {
    this.productService = productService;
    this.addProduct = this.addProduct.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  async getAll(_req: Request, res: Response) {
    const { type, message } = await this.productService.getAll();

    console.log(message);

    if (type) return res.status(mapError(type)).json({ message });

    return res.status(200).json(message);
  }

  async addProduct(req: Request, res: Response) {
    const book = req.body;
    const { type, message } = await this.productService.addProduct(book);

    if (type) return res.status(mapError(type)).json({ message });

    return res.status(201).json(message);
  }
}

export default ProductController;