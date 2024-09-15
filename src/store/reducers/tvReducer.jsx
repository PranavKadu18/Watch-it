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
        }
    }
})

export const {settv} = tvSlice.actions;
export default tvSlice.reducer;
