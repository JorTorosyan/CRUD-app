import { createSlice } from "@reduxjs/toolkit";

export const GlobalSlice = createSlice({
    name: "global",
    initialState: {
        users: ''
    },
    reducers: {
        allUsersReducer: (state, action) => {
            state.users = action.payload;
        },
    },
});

export const {
    allUsersReducer
} = GlobalSlice.actions;

export default GlobalSlice.reducer;