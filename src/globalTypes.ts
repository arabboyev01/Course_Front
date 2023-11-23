import React, { ReactNode } from 'react'

export interface DropdownProps {
    options: any
    handleOptionClick: (e: string) => void
    firstOption: any
}

export interface Options {
    firstOption?: string
    totalReview?: number
    options: any
    handleOptionClick: (e: any) => void
}

export interface ReviewType {
    id: number,
    name: string,
    groupName: string,
    reviewText: string,
    imageUrl: string | any,
    grade: number,
    userId?: number
    tags: string[]
    createdAt: string
    user: usersType
    likes: any
    isLiked: boolean
}

export interface ExploreProp {
    reviews: ReviewType[]|null
}
export interface usersType {
    email: string
    firstName: string
    hashPassword: string
    id: number
    lastName: string
    username: string
    imageUrl?: null | string
    userType: string
    status: string
}

export interface ReviewPropsType {
    ReviewsData?: ReviewType[] | any
    loading?: boolean
    count?: number
    handlePaginateData?: (e: any) => void
    navigateSinglePage?: (id: number) => void
    handleLikeReq: (reviewId: number) => void
}

export interface RoutingType {
    handleRouter: () => void
    Auth: boolean
    handleMain: () => void
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
export type totalLikeType = {
    reviewId: number
    likeCount: number
}
export type ImageObjectProp = {
    imageUrl: string
    open: boolean
}

export interface CounterState {
    mode: string
    isAuthorized: boolean
    tags: null | string[]
    image: any
    users: null | usersType
    groupName: string
    reviewLength: number
    selectedTags: string[] | null
    singleUser: usersType | null
    userId: null | number
    filterName: string
    sortName: string
    userReviewId: null | number[]
    isLiked: boolean
    totalLike: null|totalLikeType[]
    imageModal: ImageObjectProp
}

export interface HandleLoginType {
    handleLogin: (e: LoginUsersType) => void
    loginRoute: () => void
    loader: boolean
    GithubSign: () => void
    showPassword: boolean
    togglePassword: () => void
}

export interface HandleSignUpTypes {
    handleSignUp: (values: SignUpUsersTypes) => void
    signUpRoute: () => void
    loader: boolean
    GithubSign: () => void
}

export interface ChildrenProps {
    children: ReactNode
}

export interface ReviewFormTypes {
    children: ReactNode,
    currentStep: number
}

export interface ThirdFormTypes {
    values: string[],
    inputValue: string,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    suggestedTags: TagsType[] | null | undefined
    handleTagSelect: (tag: string) => void
    open: boolean
    handleInputFocus: () => void
    handleInputBlur: () => void
    userType: boolean
}

export interface StepperProps {
    children: ReactNode
    currentStep: number
}

export interface SideBarNavType {
    id: number
    display: string,
    icon: any
    to: string

}

export interface SidebarProps {
    pathname: string,
    handleActive: (router: string) => void
    handleOpen: () => void
    handleClose: () => void
    open: boolean
    sidebarDumb: any
}

export interface TagsType {
    id: number
    name: string
}

export type GoogleLoginResponse = {
    credential: {
        googleId: string;
        imageUrl: string;
        email: string;
        familyName: string;
        givenName: string;
        name: string;
    };
    tokenId: string;
    accessToken: string;
    googleAccessToken: string;
    googleIdToken: string;
    error: any;
    onSuccess: any
};

export interface CommentsType {
    postComment: (values: object, form: any) => void
    comments: any
    setShowEmoji: (value: boolean) => void
    showEmoji: boolean
}

export interface PropsSearch {
    inputValue: string
    handleDirect: (id: number) => void
}

export interface PropsDumbSearch {
    active: string,
    makeActive: (propertyName: any, value: string) => void
    inputValue: string
    searchData: ReviewType[] | null
    handleDirect: (id: number) => void
}

export interface HeroProps {
    handleDirect: (id: number) => void,
    reviews: ReviewType[] | null
}

export interface FadeProps {
    children: React.ReactElement;
    in?: boolean;
    onClick?: any;
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    onExited?: (node: HTMLElement, isAppearing: boolean) => void;
    ownerState?: any;
}

export interface ModalProps {
    handleClose: () => void,
    open: boolean
    selectedFile: any
    handleFileChange: (e: any) => void
    handleUploadImage: () => void
    loader: boolean
}

export interface PopoverProp {
    anchorEl: any,
    setAnchorEl: any
    setId: (id: number) => void
}

export type selectedObjectsTypes = {
    index: number
    label: string
    value: string
}

export interface EditableDataGridProps {
    users: usersType[] | null | {error: string} | any
    handleUpdate: (index: number, newValue: string) => void
    editableIndex: null
    setEditedValue: (value: string) => void
    setEditableIndex: (value: any) => void
}


export interface EditInputTypes {
    name: string
    reviewText: string
    group: string
    tags: string
}

export interface MainNavigatorTypes {
    id: number
    name: string
    icon: any
    route: string
}

export interface User {
  email: string;
  firstName: string;
  hashPassword: string;
  id: number;
  imageUrl: string;
  lastName: string;
  status: string;
  userType: string;
  username: string;
}

export interface userCartProp {
    userData: User
}