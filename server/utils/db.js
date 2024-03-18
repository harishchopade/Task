const { PrismaClient } = require("@prisma/client");

if (process.env.NODE_ENV !== 'production') {
    global.prisma = global.prisma || new PrismaClient();
}