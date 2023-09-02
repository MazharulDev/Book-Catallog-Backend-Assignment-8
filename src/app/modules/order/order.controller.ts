import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { orderService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await orderService.createOrder(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});
const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const result = await orderService.getAllOrders();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders fetched successfully',
    data: result,
  });
});

export const orderController = {
  createOrder,
  getAllOrders,
};
