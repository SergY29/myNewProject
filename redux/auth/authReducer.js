import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
    nickName: null,
    userId: null,
    stateChange: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: defaultState,
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
        authSignOut: () => defaultState,
    },
});



