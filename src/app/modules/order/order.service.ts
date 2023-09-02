import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createOrder = async (data: any): Promise<Order | null> => {
  const result = await prisma.order.create({
    data,
  });
  return result;
};

const getAllOrders = async (): Promise<Order[]> => {
  const result = await prisma.order.findMany({});
  return result;
};

export const orderService = {
  createOrder,
  getAllOrders,
};
