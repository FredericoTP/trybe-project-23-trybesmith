import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import validateNewProduct from '../middlewares/validateNewProduct';

const productsRouter = Router();

const productController = new ProductController();

productsRouter.get('/', productController.getAll);

productsRouter.post('/', validateNewProduct, productController.addProduct);

export default productsRouter;