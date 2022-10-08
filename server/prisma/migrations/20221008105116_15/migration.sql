/*
  Warnings:

  - A unique constraint covering the columns `[stampId]` on the table `Cart_items` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cart_items_stampId_key" ON "Cart_items"("stampId");
