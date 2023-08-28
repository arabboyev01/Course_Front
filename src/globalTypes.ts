export interface DropdownProps {
    options: string[] | undefined
    selectedOption: string | null
    handleOptionClick: (e: string) => void
}

export interface Options {
    options: string[] | undefined
    firstOption: string
    filters?: string[] | undefined
}

export interface ReviewType {
    id: number,
    name: string,
    groupName: string,
    reviewText: string,
    imageUrl: string | any,
    grade: number,
    userId: number
    tags: string
}

export interface usersType {
    email: string
    firstName: string
    hashPassword: string
    id: number
    lastName: string
    username: string
}

export interface ReviewPropsType {
    ReviewsData?: ReviewType[] | any
    users: usersType[] | null | any
}

export interface RoutingType {
    handleRouter: () => void
    Auth: boolean
}

export type SignUpUsersTypes = {
    email: string
    firstName: string
    lastname: string
    username: string
    password: string
}

export type LoginUsersType = {
    username: string
    password: string
}

export interface CounterState {
    value: number
    isAuthorized: boolean
}

export interface HandleLoginType {
    handleLogin: (e: LoginUsersType) => any
    loginRoute: () => void
    loader: boolean
}

export interface HandleSignUpTypes {
    handleSignUp: (values: SignUpUsersTypes) => void
    signUpRoute: () => void
    loader: boolean
}