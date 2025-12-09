// backend/src/prisma.ts
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
// Exportamos una única instancia de PrismaClint apuntando a la URL de Postgres
export const prisma = new PrismaClient();
