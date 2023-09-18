import { RootState } from '@/store/index'

export const Authorized = (state: RootState) => state.counter.isAuthorized
export const tags = (state: RootState) => state.counter.tags
export const image = (state: RootState) => state.counter.image
export const reviewLength = (state: RootState) => state.counter.reviewLength
export const groupName = (state: RootState) => state.counter.groupName
export const selectTags = (state: RootState) => state.counter.selectedTags
export const filterGroup = (state: RootState) => state.counter.filterGroup
export const SingleUser = (state: RootState) => state.counter.singleUser
