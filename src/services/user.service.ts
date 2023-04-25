import UserModel from '../models/user.model';
import connection from '../models/connection';
import { validateUser } from './validations/validationInputValues';
import { User, UserAdd, UserError } from '../interfaces/user.interface';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async addUser(user: User): Promise<UserAdd | UserError> {
    const error = validateUser(user);
    if (error.type) return error;

    const newUser = await this.model.addUser(user);

    return { type: null, message: newUser };
  }
}

export default UserService;