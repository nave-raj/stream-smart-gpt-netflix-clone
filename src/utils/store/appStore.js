import movieSlice from "./movieSlice";
import userSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice,
    }
})

export default appStore;