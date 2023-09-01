import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { userController } from './user.controller';
const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), userController.getAllUser);
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), userController.getUserById);

export const userRoutes = router;
