import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/store/initialState'
import { setCookie, getCookie } from '@/utils/setCookie'

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
        changeStep: (state, action: PayloadAction): void => {
            if (action) {
                state.currentStep = action.payload
            }
        },
        handleTags: (state, action: PayloadAction): void => {// @ts-ignore
            if (action?.payload?.length) {// @ts-ignore
                state.tags = action.payload
            }
        },
        handleImage: (state, action: PayloadAction): void => {// @ts-ignore
            if (action.payload) {
                state.image = action.payload
            }
        },
        handleSuccess: (state, action: PayloadAction): void => {
            if (action) {// @ts-ignore
                state.isReviewCreated = action.payload
            }
        },
        userData: (state, action: any) => {
            // @ts-ignore
            if (action.payload) {
                state.users = action.payload
            }
        },
        handleGroupName: (state, action: PayloadAction): void => {// @ts-ignore
            if (action.payload) {
                state.groupName = action.payload
            }
        },
        handleSelectedTags: (state, action: PayloadAction | any): void => {
            state.selectedTags = action.payload
        }
    },
});

export const {
    setToken,
    verifyUser,
    changeStep,
    handleTags,
    handleImage,
    handleSuccess,
    userData,
    handleGroupName,
    handleSelectedTags
} = reducerSlice.actions;


export default reducerSlice.reducer;
