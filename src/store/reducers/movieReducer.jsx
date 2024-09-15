import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: null,
}

const movieSlice = createSlice({
    name : 'movie',
    initialState,
    reducers : {
        setMovie : (state, action) => {
            state.info = action.payload;
        },
        deleteMovie : (state,action) => {
            state.info = null;
        }
    }
})

export const {setMovie,deleteMovie} = movieSlice.actions;
export default movieSlice.reducer;
