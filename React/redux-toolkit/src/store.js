import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";

/*
    EXERCISE 2: Configure the Store

    1. Use `configureStore` to create the Redux store.
    2. Pass the `moviesReducer` to the `reducer` object.
    3. The key for the reducer should be `moviesReducer`.

    Documentation: https://redux-toolkit.js.org/api/configureStore
*/

export const store = configureStore({
    reducer: {
        // TODO: Add the moviesReducer here
    }
});