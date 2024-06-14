import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
    data: {
        name: 'luiz phelipe',
        email: 'luiz@isUint16Array.com'
    },
})