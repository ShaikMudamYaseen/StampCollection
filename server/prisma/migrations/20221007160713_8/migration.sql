/*
  Warnings:

  - Added the required column `stampId` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "stampId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_stampId_fkey" FOREIGN KEY ("stampId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
