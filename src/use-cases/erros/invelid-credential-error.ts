export class InvalidCredentialError extends Error {
    constructor() {
        super('invalid credentials.')
    }
}