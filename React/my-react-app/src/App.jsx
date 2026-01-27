import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [stats, setStats] = useState({ users: 10, alerts: 2 });

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
      <p>Users: {stats.users}</p>
      <p>Alerts: {stats.alerts}</p>
      <div>
      <button onClick={() => setStats({...stats, users: stats.users + 1})}>Increment users</button>
      <button onClick={() => setStats({...stats, alerts: stats.alerts + 1 })}>Increment alerts</button><br></br>
      <button onClick={() => setStats({...stats, users: stats.users - 1 })}>Decrement users</button>
      <button onClick={() => setStats({...stats, alerts: stats.alerts - 1 })}>Decrement alerts</button><br></br>
      <button onClick={() => setStats({...stats, users: 0 })}>Reset users</button>
      <button onClick={() => setStats({...stats, alerts: 0 })}>Reset alerts</button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount((count) => count = 0)}>
          Reset
        </button>
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

export default App
