import userSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
    reducer: userSlice,
})

export default appStore;