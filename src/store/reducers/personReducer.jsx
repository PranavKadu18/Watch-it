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
        },
        deleteperson : (state,action) => {
            state.info = null;
        }
    }
})

export const {setperson,deleteperson} = personSlice.actions;
export default personSlice.reducer;
