import { Request, Response, NextFunction } from 'express';

const validateNewUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, password } = req.body;

  if (!username) return res.status(400).json({ message: '"username" is required' });

  if (!vocation) return res.status(400).json({ message: '"vocation" is required' });

  if (!password) return res.status(400).json({ message: '"password" is required' });

  return next();
};

const validateNewUserLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;

  if (!level && level !== 0) return res.status(400).json({ message: '"level" is required' });

  return next();
};

export { validateNewUser, validateNewUserLevel };