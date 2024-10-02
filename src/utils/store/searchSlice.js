import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'GPT Search',
    initialState: {
        isGptSearchPage : false,
        selectedLanguage: 'en',
        movieResults: null,
        movieNames: null,
    },
    reducers: {
        setIsGptSearchPage : (state, action) => {
            state.isGptSearchPage = action.payload;
        },
        setSelectedLanguage : (state, action) => {
            state.selectedLanguage = action.payload;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    }
})

export const {setIsGptSearchPage, setSelectedLanguage, addGptMovieResult} = searchSlice.actions;
export default searchSlice.reducer;