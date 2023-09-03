import { User } from '@prisma/client';
import Jwt from 'jsonwebtoken';
import prisma from '../../../shared/prisma';

const getUserOwnProfile = async (token: any): Promise<User | null> => {
  const userToken: any = Jwt.decode(token);

  const id = userToken?.userId;

  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const profileService = {
  getUserOwnProfile,
};
