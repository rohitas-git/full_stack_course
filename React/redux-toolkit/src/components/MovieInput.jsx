import { useState } from "react";
// import { addMovie } from "../movieSlice";
// import { useDispatch } from "react-redux";

/*
    EXERCISE 3: Connect Components (Dispatch)

    1. Import `useDispatch` from `react-redux`.
    2. Import `addMovie` action from `../movieSlice`.
    3. Initialize `dispatch` using `useDispatch()`.
    4. Dispatch the `addMovie` action with the new movie name as the payload when the button is clicked.

    Documentation: https://react-redux.js.org/api/hooks#usedispatch
*/

export const MovieInput = () => {
    const [newMovieName, setNewMovieName] = useState("");

    // TODO: Initialize dispatch
    // const dispatch = ...

    const handleAddMovie = () => {
        if (newMovieName.trim() !== "") {
            // TODO: Dispatch addMovie action
            // dispatch(...)

            setNewMovieName("");
        }
    };

    return (
        <div>
            <input type="text" value={newMovieName} onChange={(e) => setNewMovieName(e.target.value)} />
            <button onClick={handleAddMovie}>Add Movie</button>
        </div>
    );
};
