import { store } from './store';
import { describe, it, expect } from 'vitest';

describe('Exercise 2: Store Configuration', () => {
    it('should have the correct initial state', () => {
        const state = store.getState();
        expect(state).toHaveProperty('moviesReducer');
        expect(state.moviesReducer).toHaveProperty('movies');
        expect(state.moviesReducer.movies).toHaveLength(3);
    });
});
