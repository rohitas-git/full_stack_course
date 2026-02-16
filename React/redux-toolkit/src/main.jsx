import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

/**
 * The main application component.
 */
import App from './App.jsx'

/**
 * Provides the Redux store to the React component tree.
 */
import { Provider } from 'react-redux'

/**
 * The configured Redux store.
 */
import { store } from './store.js'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    {/* 
      The Provider component wraps the App component to provide the Redux store 
      to the entire component tree, allowing any nested component to access the 
      state and dispatch actions via React's context API.
    */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
