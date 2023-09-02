import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createCategories = async (data: Category): Promise<Category | null> => {
  const result = await prisma.category.create({
    data,
  });
  return result;
};

const getAllCategories = async (): Promise<Category[] | null> => {
  const result = await prisma.category.findMany({});
  return result;
};

const getCategoryById = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      books: true,
    },
  });
  return result;
};
const updateCategoryById = async (
  id: string,
  payload: Category
): Promise<Category | null> => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};
const deleteCategoryById = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
  });
  return result;
};

export const categoryService = {
  createCategories,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
