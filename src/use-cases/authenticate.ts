import { User } from "@prisma/client";
import { UserRepository } from "../repositories/users-repository";
import { InvalidCredentialError } from "./erros/invelid-credential-error";
import { compare } from "bcryptjs";

interface AuthenticateUseRequest {
    email: String
    password: String
}

interface AuthenticateUseResponse {
    user: User
}

export class AuthenticateUseCase {
    constructor(
        private userRepository: UserRepository,
    ) {}

    async execute({ email , password}: AuthenticateUseRequest): Promise<AuthenticateUseResponse> {
        const user = await this.userRepository.findyByEmail(email)

        if(!user) {
            throw new InvalidCredentialError()
        }

        const asSenhasBatem = compare(password, user.password_hash)

        if (!asSenhasBatem){
            throw new InvalidCredentialError()
        }

        return {
            user,
        }
    }
}