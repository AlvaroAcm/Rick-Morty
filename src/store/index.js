import { configureStore } from "@reduxjs/toolkit";
import  charactersSlice  from "./slices/charactersSlice/charactersSlice";


export const store = configureStore({
    reducer: {
        characters: charactersSlice
    },
})