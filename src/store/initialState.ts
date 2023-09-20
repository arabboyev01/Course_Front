import { CounterState } from '@/globalTypes'

export const initialState: CounterState = {
  isAuthorized: false,
  tags: null,
  image: null,
  users: null,
  groupName: "",
  reviewLength: 0,
  selectedTags: null,
  filterGroup: null,
  singleUser: null,
  userId: null
};