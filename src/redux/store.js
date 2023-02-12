import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./countReducer";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});