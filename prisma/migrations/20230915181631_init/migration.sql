-- CreateTable
CREATE TABLE "Booking" (
    "bookingId" TEXT NOT NULL PRIMARY KEY,
    "reservationDate" TEXT NOT NULL,
    "reservationTime" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "partySize" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Guest" (
    "guestId" TEXT NOT NULL PRIMARY KEY,
    "guestEmail" TEXT NOT NULL,
    "guestName" TEXT NOT NULL,
    "guestPhone" TEXT NOT NULL
);
