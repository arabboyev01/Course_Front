export const userValidation = {
    validationUserId: "please_login_first",
    prsimaValidationError: "PrismaClientValidationError",
    unAuthorizedUser: "Unauthorized user",
    validation: "Unauthorized",
    blockedUser: "user is blocked",
    internalServer: "Internal server error",
    emptyData: "no data"
}

export const user = {
    isAdmin: "ADMIN"
}

export const MainInformation = {
    aboutText: "\"Welcome, your go-to destination for sharing your thoughts on movies, books, and more! " +
        "Express your opinions, rate your favorites, and discover new gems in the world of entertainment. " +
        "Join a community of fellow enthusiasts, and let your voice be heard. " +
        "Whether it's a blockbuster hit or a hidden literary treasure, your reviews and ratings matter here. "
}

export class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CustomError';
    }
}