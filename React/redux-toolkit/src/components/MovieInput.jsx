
import { useState } from "react";
import { addMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

export const MovieInput = () => {
    const [newMovieName, setNewMovieName] = useState("");
    /**
     * Purpose: Accesses the dispatch function from the Redux store to send actions and trigger state updates.
     * Args: None
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    const dispatch = useDispatch();

    /**
     * Purpose: Validates the movie input and dispatches the addMovie action if valid.
     * Args: None
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    const handleAddMovie = () => {
        if (newMovieName.trim() !== "") {
            // dispatches this action to the redux store
            dispatch(addMovie(newMovieName));
            // clears the input field
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
