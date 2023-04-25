import Joi, { StringSchema } from 'joi';

const nameSchema: StringSchema = Joi.string().min(3).required();

const amountSchema: StringSchema = Joi.string().min(3).required();

const newProductSchema = Joi.object({
  name: nameSchema,
  amount: amountSchema,
});

export default newProductSchema;