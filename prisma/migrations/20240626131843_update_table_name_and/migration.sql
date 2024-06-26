/*
  Warnings:

  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Products";

-- CreateTable
CREATE TABLE "Products_table" (
    "id" TEXT NOT NULL,
    "Product_thumbnail" TEXT NOT NULL,
    "Product_title" TEXT NOT NULL,
    "Product_description" TEXT NOT NULL,
    "Product_cost" DOUBLE PRECISION NOT NULL,
    "On_offer" BOOLEAN NOT NULL,

    CONSTRAINT "Products_table_pkey" PRIMARY KEY ("id")
);
