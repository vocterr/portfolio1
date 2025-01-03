/*
  Warnings:

  - You are about to drop the column `occuredAt` on the `AnalyticsEvent` table. All the data in the column will be lost.
  - The primary key for the `Conversion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `Conversion` table. All the data in the column will be lost.
  - You are about to drop the column `analytiscEventId` on the `PageView` table. All the data in the column will be lost.
  - You are about to drop the column `ednTime` on the `Shift` table. All the data in the column will be lost.
  - The required column `id` was added to the `Conversion` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `analyticsEventId` to the `PageView` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Shift` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PageView" DROP CONSTRAINT "PageView_analytiscEventId_fkey";

-- AlterTable
ALTER TABLE "AnalyticsEvent" DROP COLUMN "occuredAt",
ADD COLUMN     "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Conversion" DROP CONSTRAINT "Conversion_pkey",
DROP COLUMN "ID",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Conversion_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PageView" DROP COLUMN "analytiscEventId",
ADD COLUMN     "analyticsEventId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Shift" DROP COLUMN "ednTime",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "PageView" ADD CONSTRAINT "PageView_analyticsEventId_fkey" FOREIGN KEY ("analyticsEventId") REFERENCES "AnalyticsEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
