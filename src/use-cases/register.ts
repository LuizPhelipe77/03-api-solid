import { hash } from "bcryptjs"
import { UserRepository } from "../repositories/users-repository"
import { UserAlreadyExistError } from "./erros/user-already-exists-error"
import { User } from "@prisma/client"

interface registerUseCaseRequest {
    name: string
    email: string
    password: string
}

    // CRIA USUARIO NA APLICACAO INDEPENDENTE DO CAMINHO VAI SER DA MESMA FORMA
interface RegisterUseCaseResponse{
    user: User
}
export class RegisterUseCase{
    constructor(private userRepository: UserRepository) {}


    async execute({ name, email, password }: registerUseCaseRequest): Promise<RegisterUseCaseResponse> {
        const password_hash = await hash(password, 6)
    
        const userWithSameEmail = await this.userRepository.findyByEmail(email)
        
    
        if (userWithSameEmail) {
            throw new UserAlreadyExistError()
        }
    
        const user = await this.userRepository.create({
            name,
            email,
            password_hash,
        })
        return {
            user,
        }
    }
}
