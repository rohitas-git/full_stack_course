import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('Exercise 3: React Integration', () => {
    it('should render the initial movie list', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(screen.getByText('Inception')).toBeInTheDocument();
        expect(screen.getByText('Interstellar')).toBeInTheDocument();
        expect(screen.getByText('Harry Potter')).toBeInTheDocument();
    });

    it('should add a new movie', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button', { name: /add movie/i });

        fireEvent.change(input, { target: { value: 'New Movie' } });
        fireEvent.click(button);

        expect(await screen.findByText('New Movie')).toBeInTheDocument();
    });

    it('should remove a movie', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        // Find the remove button for "New Movie" (or any existing one)
        // Since we just added "New Movie" in the previous test, it might persist if the store isn't reset.
        // However, for this exercise, we can just test removing one of the initial movies.

        const removeButtons = screen.getAllByText('Remove Movie');
        const firstRemoveButton = removeButtons[0];

        fireEvent.click(firstRemoveButton);

        // Wait for it to disappear
        // Note: queryByText returns null if not found, getByText throws
        expect(screen.queryByText('Inception')).not.toBeInTheDocument();
    });
});
