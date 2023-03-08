import { createSlice } from '@reduxjs/toolkit'



export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        nickName: null,
        userId: null,
        stateChange: false,
    },
    reducers: {
        updateUserProfile: (state, { payload }) => ({
            ...state,
            userId: payload.userId,
            nickName: payload.nickName,
        }),
        authChangeState: (state, { payload }) => ({
            ...state,
            stateChange: payload.stateChange
        }),
    },
});



