import { CounterState } from '@/globalTypes'

export const initialState: CounterState = {
  isAuthorized: false,
  currentStep: 1,
  isComplete: false,
  tags: null,
  image: null
};