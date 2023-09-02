import { Order } from '@prisma/client';
import Jwt from 'jsonwebtoken';
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

export const orderService = {
  createOrder,
  getAllOrders,
};
