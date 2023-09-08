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
        }
    },
});

export const {
    setToken,
    verifyUser,
    changeStep,
    handleTags,
    handleImage,
    reviewDataLength,
    handleGroupName,
    handleSelectedTags
} = reducerSlice.actions;


export default reducerSlice.reducer;
