import { RootState } from '@/store/index'

export const Authorized = (state: RootState) => state.counter.isAuthorized
export const tags = (state: RootState) => state.counter.tags
export const image = (state: RootState) => state.counter.image
export const reviewLength = (state: RootState) => state.counter.reviewLength
export const groupName = (state: RootState) => state.counter.groupName
export const selectTags = (state: RootState) => state.counter.selectedTags
export const SingleUser = (state: RootState) => state.counter.singleUser
export const adminUserId = (state: RootState) => state.counter.userId
export const sortName = (state: RootState) => state.counter.sortName
export const filterName = (state: RootState) => state.counter.filterName
export const userReviewId = (state: RootState) => state.counter.userReviewId
export const isLiked = (state: RootState) => state.counter.isLiked
export const totalLike = (state: RootState) => state.counter.totalLike