import { createSlice } from '@reduxjs/toolkit'



export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        nickname: null,
        userId: null,
    },
    reducers: {
        updateUserProfile: (state, { payload }) => ({
            ...state,
            userId: payload
        }),
    },
});



