import { CounterState } from '@/globalTypes'

export const initialState: CounterState = {
    mode: 'light',
    isAuthorized: false,
    tags: null,
    image: null,
    users: null,
    groupName: '',
    reviewLength: 0,
    selectedTags: null,
    singleUser: null,
    userId: null,
    filterName: '',
    sortName: '',
    userReviewId: null,
    isLiked: false,
    totalLike: null,
    imageModal: {open: false, imageUrl: ''},
    bookmarkReviewId: null
};