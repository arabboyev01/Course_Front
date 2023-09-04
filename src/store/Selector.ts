import { RootState } from '@/store/index'

export const Authorized = (state: RootState) => state.counter.isAuthorized
export const CurrStep = (state: RootState) => state.counter.currentStep
export const tags = (state: RootState) => state.counter.tags
export const image = (state: RootState) => state.counter.image
export const isCreated = (state: RootState) => state.counter.isReviewCreated
export const reviewLength = (state: RootState) => state.counter.allReviews
export const groupName = (state: RootState) => state.counter.groupName