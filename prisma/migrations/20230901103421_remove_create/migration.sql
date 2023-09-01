/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ReviewAndRating` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ReviewAndRating` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ReviewAndRating" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "book" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "category" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
