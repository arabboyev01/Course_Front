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
        changeComplete: (state, action: PayloadAction): void => {// @ts-ignore
            if(action.payload) state.isComplete = true
        }
    },
});

export const {setToken, verifyUser, changeStep, changeComplete} = reducerSlice.actions;


export default reducerSlice.reducer;
