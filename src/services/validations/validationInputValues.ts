import { Product } from '../../interfaces/product.interface';
import newProductSchema from './schemas';

const validateProduct = (product: Product) => {
  const { error } = newProductSchema.validate(product);

  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' }; 
};

export default validateProduct;