import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        topRatedMovies: null,
        popularMovies: null,
        upcomingMovies: null,
        trailerMovieData: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailerMovieData : (state, action) => {
            state.trailerMovieData = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addPopularMovies, addUpcomingMovies, addTopRatedMovies, addTrailerMovieData} = movieSlice.actions;
export default movieSlice.reducer;