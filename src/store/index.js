import { configureStore } from "@reduxjs/toolkit";
import  charactersSlice  from "./slices/charactersSlice/charactersSlice";
import  locationsSlice  from "./locationSlice/locationSlice";


export const store = configureStore({
    reducer: {
        characters: charactersSlice,
        locations: locationsSlice
    },
})