import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";

import { UserRepository } from "../users-repository";

// verifica para nao criar um usuario com o mesmo email
export class PrismaUsersRepository implements UserRepository {
    async findyByEmail(email: string) {
        const user = await prisma.user.findUnique({ 
            where: {
                email,
            },
        })

        return user
    }
    async create(data: Prisma.UserCreateInput) {
         // CRIAR NO BANCO DE DADOS
        const user = await prisma.user.create({
            data,
        })
        
        return user
    }
}