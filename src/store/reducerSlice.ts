import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/store/initialState'
import { setCookie, getCookie, removeTokenFromCookie } from '@/utils/setCookie'

const reducerSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction): void => {
            setCookie('authToken', action.payload, 7);
            const verify = getCookie('authToken')
            if (verify) {
                state.isAuthorized = true;
            }
        },
        verifyUser: (state) => {
            const verify = getCookie('authToken')
            if (verify) state.isAuthorized = true;
        },
        logOut: (state) => {
            removeTokenFromCookie();
            state.isAuthorized = false;
        },
        handleTags: (state: any, action: PayloadAction | any): void => {
            if (action?.payload?.length) {
                state.tags = action.payload
            }
        },
        handleImage: (state: any, action: PayloadAction | any): void => {
            if (action.payload) {
                state.image = action.payload
            }
        },
        reviewDataLength: (state, action: any) => {
            if (action.payload) {
                state.reviewLength = action.payload
            }
        },
        handleGroupName: (state: any, action: PayloadAction): void => {
            state.groupName = action.payload
        },
        handleSelectedTags: (state, action: PayloadAction | any): void => {
            state.selectedTags = action.payload
        },
        singleUser: (state: any, action: PayloadAction): void => {
            state.singleUser = action.payload
        },
        getUserId: (state: any, action: PayloadAction | any): void => {
            state.userId = action.payload
        },
        filterName: (state: any, action: PayloadAction) => {
            state.filterName = action.payload
        },
        sortName: (state: any, action: PayloadAction) => {
            state.sortName = action.payload
        }
    },
});

export const {
    setToken,
    verifyUser,
    handleTags,
    handleImage,
    reviewDataLength,
    handleGroupName,
    handleSelectedTags,
    singleUser,
    getUserId,
    filterName,
    sortName,
    logOut
} = reducerSlice.actions;


export default reducerSlice.reducer;
