import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>Using Reusable Counters:</p>
      <div className="card">
        <Counter label="Users" initialValue={10} />
        <Counter label="Alerts" initialValue={2} />
      </div>
      <div className="card">
        <CounterApp />  
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// Counter component focuses on the logic of counting
// It now accepts props to be reusable!
function Counter({ label, initialValue }) {
  const [count, setCount] = useState(initialValue || 0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function reset() {
    setCount(initialValue || 0)
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h3>{label || "Counter"}</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

// CounterApp component focuses on layout or assembling the page.
function CounterApp() {
  return (
    <>
      <h1>My Counter Application</h1>
      <Counter />
    </>
  )
}

