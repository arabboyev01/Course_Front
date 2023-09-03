import React, { ReactNode } from 'react'

export interface DropdownProps {
    options: string[] | undefined
    selectedOption: string | undefined
    handleOptionClick: (e: string) => void
}

export interface Options {
    options: string[] | undefined
    firstOption?: string | undefined
    filters?: string[] | undefined
    totalReview?: number
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
    isAuthorized: boolean
    currentStep: any
    tags: null | string[]
    image: any
    isReviewCreated: boolean
    allReviews: number
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

export interface ChildrenProps {
    children: ReactNode
}

export interface ThirdFormTypes {
    values: string[],
    inputValue: string,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    suggestedTags: any
    handleTagSelect: (tag: string) => void
    open: boolean
    existingTags: TagsType[] | null
    handleInputFocus: () => void
    handleInputBlur: () => void
    loading: boolean
}

export interface StepperProps {
    steps: string[]
    currentStep: number
    complete: boolean
    setCurrentStep: (e: any) => void
    setComplete: any
    children: ReactNode
    setChanges: (value: any, steps: string[], setComplete: any, setCurrentStep: any) => void
}

export interface SideBarNavType {
    id: number
    display: string,
    icon: any
    to: string

}

export interface SidebarProps {
    pathname: string ,
    sidebarNavItems: SideBarNavType[]
    handleActive: (router: string) => void
}

export interface TagsType {
    id: number
    name: string
}