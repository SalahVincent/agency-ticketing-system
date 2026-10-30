/*
  Warnings:

  - A unique constraint covering the columns `[clerkUserId]` on the table `Agent` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('TICKET_SALE', 'CHECK_IN', 'INVENTORY_ALERT', 'SYSTEM');

-- AlterTable
ALTER TABLE "Agency" ADD COLUMN     "autoInvoiceClient" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "clientSmsNotify" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "serviceType" TEXT,
ADD COLUMN     "terminalName" TEXT;

-- AlterTable
ALTER TABLE "Agent" ADD COLUMN     "clerkUserId" TEXT;

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "agencyId" TEXT,
    "type" "NotificationType" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationRead" (
    "notificationId" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "readAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NotificationRead_pkey" PRIMARY KEY ("notificationId","clerkUserId")
);

-- CreateIndex
CREATE INDEX "Notification_agencyId_createdAt_idx" ON "Notification"("agencyId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_clerkUserId_key" ON "Agent"("clerkUserId");

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationRead" ADD CONSTRAINT "NotificationRead_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;
