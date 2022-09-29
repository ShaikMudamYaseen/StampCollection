/*
  Warnings:

  - You are about to drop the column `collectionId` on the `Cart_items` table. All the data in the column will be lost.
  - Added the required column `stampId` to the `Cart_items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cart_items" DROP CONSTRAINT "Cart_items_collectionId_fkey";

-- AlterTable
ALTER TABLE "Cart_items" DROP COLUMN "collectionId",
ADD COLUMN     "stampId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Cart_items" ADD CONSTRAINT "Cart_items_stampId_fkey" FOREIGN KEY ("stampId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
