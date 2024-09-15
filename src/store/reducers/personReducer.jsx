import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: null,
}

const personSlice = createSlice({
    name : 'person',
    initialState,
    reducers : {
        setperson : (state, action) => {
            state.info = action.payload;
        }
    }
})

export const {setperson} = personSlice.actions;
export default personSlice.reducer;
