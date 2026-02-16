import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeMovie } from "../movieSlice";

/*
    EXERCISE 3: Connect Components (Select & Dispatch)

    1. Import `useSelector` and `useDispatch` from `react-redux`.
    2. Import `removeMovie` from `../movieSlice`.
    3. Use `useSelector` to get the list of movies from the state.
       - The state structure is `{ moviesReducer: { movies: [...] } }`.
    4. Initialize `dispatch`.
    5. Dispatch `removeMovie` with the movie ID when the remove button is clicked.

    Documentation: https://react-redux.js.org/api/hooks#useselector
*/

export const MovieList = () => {

    // TODO: Get movies from state
    // const movies = useSelector(...) || []; 
    const movies = [];

    // TODO: Initialize dispatch
    // const dispatch = ...

    const handleRemoveMovie = (id) => {
        // TODO: Dispatch removeMovie
        // dispatch(...)
    };

    return (
        <div>
            <h2>Movie List</h2>
            {movies.map((movie) => (
                <p key={movie.id}>{movie.name}
                    <button onClick={() => handleRemoveMovie(movie.id)}> Remove Movie</button></p>
            ))}
        </div>
    );
}