import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [{ id: 1, name: "Inception" }, { id: 2, name: "Interstellar" }, { id: 3, name: "Harry Potter" }],
};

/*
    EXERCISE 1: Create the Movie Slice

    1. Use `createSlice` to define the slice.
    2. Name the slice "movies".
    3. Pass the `initialState` defined above.
    4. Define two reducers:
        a. `addMovie`: It should add a new movie to the state. 
           - The payload will be the movie name.
           - Generate a new ID based on the last movie's ID (max ID + 1), or 1 if the list is empty.
        b. `removeMovie`: It should remove a movie by its ID.
           - The payload will be the movie ID.

    Documentation: https://redux-toolkit.js.org/api/createSlice
*/

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        // TODO: Implement addMovie
        addMovie: (state, action) => {
            // Your code here
        },
        // TODO: Implement removeMovie
        removeMovie: (state, action) => {
            // Your code here
        },
    },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
