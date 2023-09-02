import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { categoryController } from './category.controller';
const router = express.Router();

router.post(
  '/create-category',
  auth(ENUM_USER_ROLE.ADMIN),
  categoryController.createCategories
);

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  categoryController.updateCategoryById
);

export const categoryRoutes = router;
