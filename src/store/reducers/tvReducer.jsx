import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: null,
}

const tvSlice = createSlice({
    name : 'tv',
    initialState,
    reducers : {
        settv : (state, action) => {
            state.info = action.payload;
        },
        deletetv : (state,action) => {
            state.info = null;
        }
    }
})

export const {settv,deletetv} = tvSlice.actions;
export default tvSlice.reducer;
