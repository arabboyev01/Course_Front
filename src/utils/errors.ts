export const userValidation = {
    validationUserId: "please_login_first",
    prsimaValidationError: "PrismaClientValidationError",
    unAuthorizedUser: "Unauthorized user",
    validation: "Unauthorized",
    blockedUser: "user is blocked",
    internalServer: "Internal server error",
    emptyData: "no data",
    emptyBookmark: "empty bookmark"
}

export const user = {
    isAdmin: "ADMIN"
}


export class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CustomError';
    }
}