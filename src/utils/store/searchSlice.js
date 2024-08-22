import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'GPT Search',
    initialState: {
        isGptSearchPage : false,
    },
    reducers: {
        setIsGptSearchPage : (state, action) => {
            state.isGptSearchPage = action.payload;
        },
    }
})

export const {setIsGptSearchPage} = searchSlice.actions;
export default searchSlice.reducer;