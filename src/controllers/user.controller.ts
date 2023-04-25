import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { mapError } from '../utils/errorMap';

class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.addUser = this.addUser.bind(this);
  }

  async addUser(req: Request, res: Response) {
    const user = req.body;
    const { type, message } = await this.userService.addUser(user);

    if (type) return res.status(mapError(type)).json({ message });

    return res.status(201).json(message);
  }
}

export default UserController;