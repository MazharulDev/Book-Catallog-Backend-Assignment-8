import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { bookController } from './book.controller';
const router = express.Router();

router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  bookController.createBook
);

router.get('/', bookController.getAllbooks);

router.get('/:id', bookController.getBookById);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), bookController.updateBookById);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  bookController.deleteBookById
);
router.get('/:categoryId/category', bookController.getBooksByCategory);

export const bookRoutes = router;
