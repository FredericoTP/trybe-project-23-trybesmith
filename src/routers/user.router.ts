import { Router } from 'express';
import UserController from '../controllers/user.controller';

const usersRouter = Router();

const userController = new UserController();

usersRouter.post('/', userController.addUser);

export default usersRouter;