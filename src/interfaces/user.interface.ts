interface User {
  id?: number;
  username: string,
  vocation: string,
  level: number,
  password: string
}

interface Token {
  token: string;
}

interface UserAdd {
  type: null;
  message: Token;
}

export { User, Token, UserAdd };