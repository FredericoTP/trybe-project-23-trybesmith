import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import validateLogin from '../middlewares/validateLogin';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', validateLogin, loginController.login);

export default loginRouter;