import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllUser = async (): Promise<User[] | null> => {
  const result = await prisma.user.findMany({});
  return result;
};
const getUserById = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const userService = {
  getAllUser,
  getUserById,
};
