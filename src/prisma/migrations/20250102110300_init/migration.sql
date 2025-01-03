/*
  Warnings:

  - You are about to drop the column `period` on the `Budget` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,category,startDate]` on the table `Budget` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Budget_userId_category_period_startDate_key";

-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "period";

-- CreateIndex
CREATE UNIQUE INDEX "Budget_userId_category_startDate_key" ON "Budget"("userId", "category", "startDate");
