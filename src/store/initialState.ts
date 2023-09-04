import { CounterState } from '@/globalTypes'

export const initialState: CounterState = {
  isAuthorized: false,
  currentStep: 1,
  tags: null,
  image: null,
  isReviewCreated: false,
  allReviews: 0,
  groupName: ""
};