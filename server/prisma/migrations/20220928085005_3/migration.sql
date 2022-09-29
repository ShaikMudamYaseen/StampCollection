-- AlterTable
ALTER TABLE "Collection" ADD COLUMN     "count" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "Cart_items" (
    "cartItemId" TEXT NOT NULL,
    "collectionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Cart_items_pkey" PRIMARY KEY ("cartItemId")
);

-- CreateTable
CREATE TABLE "Orders" (
    "orderId" TEXT NOT NULL,
    "txnId" TEXT NOT NULL,
    "cartItemId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("orderId")
);

-- AddForeignKey
ALTER TABLE "Cart_items" ADD CONSTRAINT "Cart_items_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart_items" ADD CONSTRAINT "Cart_items_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_cartItemId_fkey" FOREIGN KEY ("cartItemId") REFERENCES "Cart_items"("cartItemId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
