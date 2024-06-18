import { Prisma, User } from "@prisma/client";


export interface UserRepository {
    findyByEmail(email: String): Promise<User | null>
    create(data: Prisma.UserCreateInput): Promise<User>
}