import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerMovieData: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerMovieData : (state, action) => {
            state.trailerMovieData = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addTrailerMovieData} = movieSlice.actions;
export default movieSlice.reducer;