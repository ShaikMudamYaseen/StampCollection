/*
  Warnings:

  - Added the required column `cartItemId` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "cartItemId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_cartItemId_fkey" FOREIGN KEY ("cartItemId") REFERENCES "Cart_items"("cartItemId") ON DELETE RESTRICT ON UPDATE CASCADE;
