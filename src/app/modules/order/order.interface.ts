import Jwt from 'jsonwebtoken';

export type IToken = {
  userId?: string | Jwt.JwtPayload | null;
  role?: 'admin' | 'customer';
};
