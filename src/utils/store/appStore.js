import movieSlice from "./movieSlice";
import searchSlice from "./searchSlice";
import userSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice,
        search: searchSlice,
    }
})

export default appStore;