import jwt, { SignOptions } from 'jsonwebtoken';
import JwtPayload from '../interfaces/jwtpayload.interface';

const secretKey: string = process.env.JWT_SECRET || 'suaSenhaSecreta';

const configJWT: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (payload: JwtPayload) => {
  const token = jwt.sign(payload, secretKey, configJWT);

  return token;
};

const validateToken = (token: string) => {
  const isValid = jwt.verify(token, secretKey);

  return isValid;
};

export { generateToken, validateToken };