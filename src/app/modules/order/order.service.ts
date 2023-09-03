import { Order } from '@prisma/client';
import httpStatus from 'http-status';
import Jwt from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const createOrder = async (data: any): Promise<Order | null> => {
  const result = await prisma.order.create({
    data,
  });
  return result;
};

const getAllOrders = async (token: any): Promise<Order[] | null> => {
  const userToken: any = Jwt.decode(token);
  const userId: any = userToken.userId;
  let result: Order[] = [];
  if (userToken.role === 'admin') {
    result = await prisma.order.findMany({});
    return result;
  } else if (userToken.role === 'customer') {
    result = await prisma.order.findMany({
      where: {
        userId,
      },
    });
  }
  return result;
};

const getOrderCustomerAndAdmin = async (
  id: string,
  token: any
): Promise<Order[] | null> => {
  const userToken: any = Jwt.decode(token);
  let result: any = [];
  if (userToken.role === 'admin') {
    result = await prisma.order.findUnique({
      where: {
        id,
      },
    });
  } else if (userToken.role === 'customer') {
    const output = await prisma.order.findUnique({
      where: {
        id,
      },
    });
    if (output?.userId === userToken.userId) {
      result = output;
    } else {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Your are not match userId');
    }
    // output?.userId===userToken.userId?result=output:throw new ApiError(httpStatus.BAD_REQUEST,"Your are not match userId")
  }
  return result;
};

export const orderService = {
  createOrder,
  getAllOrders,
  getOrderCustomerAndAdmin,
};
