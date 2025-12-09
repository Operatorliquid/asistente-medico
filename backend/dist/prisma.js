"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
// backend/src/prisma.ts
require("dotenv/config");
const client_1 = require("@prisma/client");
// Exportamos una única instancia de PrismaClient apuntando a la URL de Postgres
exports.prisma = new client_1.PrismaClient();
