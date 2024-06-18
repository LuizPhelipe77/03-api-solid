import { hash } from "bcryptjs"
import { UserRepository } from "../repositories/users-repository"

interface registerUseCaseRequest {
    name: string
    email: string
    password: string
}

    // CRIA USUARIO NA APLICACAO INDEPENDENTE DO CAMINHO VAI SER DA MESMA FORMA
export class RegisterUseCase{
    constructor(private userRepository: UserRepository) {}

    async execute({ name, email, password }: registerUseCaseRequest) {
        const password_hash = await hash(password, 6)
    
        const userWithSameEmail = await this.userRepository.findyByEmail(email)
        
    
        if (userWithSameEmail) {
            throw new Error('E-mail ja existe ')
        }
    
        await this.userRepository.create({
            name,
            email,
            password_hash,
        })
    }
}
