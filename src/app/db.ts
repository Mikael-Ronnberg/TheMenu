import { PrismaClient } from "@prisma/client";

const globarForPrism = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globarForPrism.prisma ??
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globarForPrism.prisma = prisma;
