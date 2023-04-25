import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { validateNewUser, validateNewUserLevel } from '../middlewares/validateNewUser';

const usersRouter = Router();

const userController = new UserController();

usersRouter.post(
  '/', 
  validateNewUser,
  validateNewUserLevel,
  userController.addUser,
);

export default usersRouter;