interface User {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

interface Token {
  token: string;
}

interface UserAdd {
  type: null;
  message: Token;
}

interface UserError {
  type: string;
  message: string;
}

interface UserLogin {
  username: string;
  password: string;
}

export { User, Token, UserAdd, UserError, UserLogin };