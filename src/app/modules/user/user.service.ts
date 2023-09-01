import { User } from '@prisma/client';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';
import { ILoginUser } from './user.interface';

const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

const loginUser = async (payload: ILoginUser) => {
  const { email, password } = payload;
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: email,
      password: password,
    },
  });
  if (!isUserExist) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'User not exist');
  }

  const { id: userId, role } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );
  return {
    accessToken,
  };
};

export const userService = {
  createUser,
  loginUser,
};
