import { expect, describe, it} from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '../repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistError } from './erros/user-already-exists-error'

              //testes de validacao

describe('Register use case', () => {
    it('should be able to', async () => {
        const userRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(userRepository)
    
        const {user} = await registerUseCase.execute({
            name: 'luiz',
            email: 'luiz@gmail.com',
            password:'123456',
        })

        expect(user.id).toEqual(expect.any(String))
    })
    it('a senha do usuario deve ser hash assim que ele se cadastrar', async () => {
        const userRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(userRepository)
    
        const {user} = await registerUseCase.execute({
            name: 'luiz',
            email: 'luiz@gmail.com',
            password:'123456',
        })

        const aSenhaFoiHashed = await compare (
            '123456', 
            user.password_hash,
        )

        expect(aSenhaFoiHashed).toBe(true)
    })


    it('nao deve ser possivel se cadastrar com o mesmo email', async () => {
        const userRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(userRepository)

        const email = 'luiz@example.com'
    
        await registerUseCase.execute({
            name: 'luiz',
            email,
            password:'123456',
        })

        await expect(() =>
            registerUseCase.execute({
                name: 'luiz',
                email,
                password:'123456',
            }),
        ).rejects.toBeInstanceOf(UserAlreadyExistError)
    })
})

