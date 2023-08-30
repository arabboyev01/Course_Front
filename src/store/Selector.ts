import { RootState } from '@/store/index'

export const Authorized = (state: RootState) => state.counter.isAuthorized
export const CurrStep = (state: RootState) => state.counter.currentStep
export const IsCompleted = (state: RootState) => state.counter.isComplete
export const tags = (state: RootState) => state.counter.tags
export const image = (state: RootState) => state.counter.image