import { Product } from '../../interfaces/product.interface';
import { User } from '../../interfaces/user.interface';
import { ValidationError, ValidationSuccess } from '../../interfaces/validation.interface';
import { newProductSchema, newUserSchema } from './schemas';

const validateProduct = (product: Product): ValidationError | ValidationSuccess => {
  const { error } = newProductSchema.validate(product);

  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' }; 
};

const validateUser = (user: User): ValidationError | ValidationSuccess => {
  const { error } = newUserSchema.validate(user);

  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' }; 
};

export { validateProduct, validateUser };