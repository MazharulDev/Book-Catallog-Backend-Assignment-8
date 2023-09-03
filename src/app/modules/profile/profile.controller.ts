import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { profileService } from './profile.service';

const getUserOwnProfile = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const result = await profileService.getUserOwnProfile(token);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

export const profileController = {
  getUserOwnProfile,
};
