import Joi, { StringSchema, NumberSchema } from 'joi';

const nameSchema: StringSchema = Joi.string().min(3).required();

const amountSchema: StringSchema = Joi.string().min(3).required();

const usernameSchema: StringSchema = Joi.string().min(3).required();

const vocationSchema: StringSchema = Joi.string().min(3).required();

const levelSchema: NumberSchema = Joi.number().min(1).required();

const passwordSchema: StringSchema = Joi.string().min(8).required();

const newProductSchema = Joi.object({
  name: nameSchema,
  amount: amountSchema,
});

const newUserSchema = Joi.object({
  username: usernameSchema,
  vocation: vocationSchema,
  level: levelSchema,
  password: passwordSchema,
});

const userInfoSchema = Joi.object({
  username: usernameSchema,
  password: passwordSchema,
});

export { newProductSchema, newUserSchema, userInfoSchema };