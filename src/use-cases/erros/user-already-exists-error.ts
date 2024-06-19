export class UserAlreadyExistError extends Error {
    constructor() {
        super('E-mail ja existe')
    }
}