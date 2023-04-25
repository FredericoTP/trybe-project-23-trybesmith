import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import { mapError } from '../utils/errorMap';

class LoginController {
  loginService: LoginService;

  constructor(loginService = new LoginService()) {
    this.loginService = loginService;
    this.login = this.login.bind(this);
  }

  async login(req: Request, res: Response) {
    const userInfo = req.body;
    const { type, message } = await this.loginService.login(userInfo);

    if (type) return res.status(mapError(type)).json({ message });

    return res.status(200).json({ token: message });
  }
}

export default LoginController;