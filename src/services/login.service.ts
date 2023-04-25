import UserModel from '../models/user.model';
import connection from '../models/connection';
import { generateToken } from '../utils/auth';
import { ValidationError, ValidationSuccess } from '../interfaces/validation.interface';
import { UserLogin } from '../interfaces/user.interface';
import { validateUserInfo } from './validations/validationInputValues';

class LoginService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async login(userInfo: UserLogin): Promise<ValidationError | ValidationSuccess> {
    const { username, password } = userInfo;
    const error = validateUserInfo({ username, password });
    if (error.type) return error;

    const user = await this.model.getByUsername(username);
    
    if (!user || user.password !== password) {
      return { type: 'UNAUTHORIZED', message: 'Username or password invalid' };
    }

    const { id } = user;

    const token = generateToken({ id, name: username });

    return { type: null, message: token };
  }
}

export default LoginService;