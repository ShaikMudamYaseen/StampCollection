/*
  Warnings:

  - You are about to drop the column `cartItemId` on the `Orders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_cartItemId_fkey";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "cartItemId";
