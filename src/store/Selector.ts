import { RootState } from '@/store/index'

export const Authorized = (state: RootState) => state.counter.isAuthorized
export const CurrStep = (state: RootState) => state.counter.currentStep
export const IsCompleted = (state: RootState) => state.counter.isComplete