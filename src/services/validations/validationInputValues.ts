import { Product } from '../../interfaces/product.interface';
import { User, UserLogin } from '../../interfaces/user.interface';
import { ValidationError, ValidationSuccess } from '../../interfaces/validation.interface';
import { newProductSchema, newUserSchema, userInfoSchema, productsIdsSchema } from './schemas';

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

const validateUserInfo = (userInfo: UserLogin): ValidationError | ValidationSuccess => {
  const { error } = userInfoSchema.validate(userInfo);

  if (error) return { type: 'UNAUTHORIZED', message: error.message };

  return { type: null, message: '' }; 
};

const validateProductsIds = (productsIds: number[]): ValidationError | ValidationSuccess => {
  const { error } = productsIdsSchema.validate(productsIds);

  if (error) {
    if (error.message.includes('must be an array')) {
      return { type: 'INVALID_VALUE', message: '"productsIds" must be an array' };
    }

    if (error.message.includes('does not contain')) {
      return { type: 'INVALID_VALUE', message: '"productsIds" must include only numbers' };
    }
  }

  return { type: null, message: '' }; 
};

export {
  validateProduct,
  validateUser,
  validateUserInfo,
  validateProductsIds,
};