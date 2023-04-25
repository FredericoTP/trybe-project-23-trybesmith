import UserModel from '../models/user.model';
import connection from '../models/connection';
import { User, UserAdd } from '../interfaces/user.interface';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async addUser(user: User): Promise<UserAdd> {
    const newUser = await this.model.addUser(user);

    return { type: null, message: newUser };
  }
}

export default UserService;