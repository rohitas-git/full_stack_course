import React from "react";
// Hook to access the redux store's state.
import { useSelector } from "react-redux";
// Hook to dispatch actions to the redux store.
import { useDispatch } from "react-redux";
// Action creator for removing a movie.
import { removeMovie } from "../movieSlice";

export const MovieList = () => {

    const movies = useSelector((state) => state.moviesReducer.movies);
    const dispatch = useDispatch();

    const handleRemoveMovie = (id) => {
        dispatch(removeMovie(id));
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