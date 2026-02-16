import movieReducer, { addMovie, removeMovie } from './movieSlice';
import { describe, it, expect } from 'vitest';

describe('Exercise 1: Movie Slice', () => {
    it('should return the initial state', () => {
        expect(movieReducer(undefined, { type: undefined })).toEqual({
            movies: [
                { id: 1, name: "Inception" },
                { id: 2, name: "Interstellar" },
                { id: 3, name: "Harry Potter" }
            ]
        });
    });

    it('should handle addMovie', () => {
        const previousState = {
            movies: [{ id: 1, name: "Inception" }]
        };
        const newState = movieReducer(previousState, addMovie("The Matrix"));
        expect(newState.movies).toHaveLength(2);
        expect(newState.movies[1].name).toBe("The Matrix");
        expect(newState.movies[1].id).toBe(2);
    });

    it('should handle removeMovie', () => {
        const previousState = {
            movies: [
                { id: 1, name: "Inception" },
                { id: 2, name: "Interstellar" }
            ]
        };
        const newState = movieReducer(previousState, removeMovie(1));
        expect(newState.movies).toHaveLength(1);
        expect(newState.movies[0].name).toBe("Interstellar");
    });
});
