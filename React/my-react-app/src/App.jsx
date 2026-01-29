import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {

  const [sharedCount, setSharedCount] = useState(0);

  function handleClick() {
    setSharedCount(sharedCount + 1);
  }

  // Doesn't have its own state
  function MySharedButton({ count, handleClick }) {
    return (
      <button onClick={handleClick}>
        Shared Clicked {count} times
      </button>
    )
  }

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
        <CounterApp label="Not Shared Count" />

        <MySharedButton count={sharedCount} handleClick={handleClick} />
        <MySharedButton count={sharedCount} handleClick={handleClick} />
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

const names = ["Rohit", "Rahul", "Ravi", "Naman", "Nishant", "Karan"]

// Counter component focuses on the logic of counting
// It now accepts props to be reusable!
function Counter({ label, initialValue }) {
  const [count, setCount] = useState(initialValue || 0)
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [listOfNames, setListOfNames] = useState(names);
  const [searchQuery, setSearchQuery] = useState('');
  const [fibnocciNumber, setFibnocciNumber] = useState(0);

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function reset() {
    setCount(initialValue || 0)
  }

  function multiplcation() {
    setCount(number1 * number2)
  }

  function division() {
    setCount(number1 / number2)
  }

  function search() {
    const newList = names.filter((name) => name.toLowerCase().includes(searchQuery.toLowerCase()))
    setListOfNames(newList)
  }

  function find_fibnocci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return find_fibnocci(n - 1) + find_fibnocci(n - 2);
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h3>{label || "Counter"}</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <br />
      <input type="number" onChange={(e) => setNumber1(e.target.value)} />
      <button onClick={multiplcation}>*</button>
      <button onClick={division}>/</button>
      <input type="number" onChange={(e) => setNumber2(e.target.value)} /> 
      <br />
      
      <input type="text" onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={search}>Search</button>
      <ul>
        {listOfNames.map((name, index) => <li key={index}>{name}</li>)}
      </ul> 
      <br />
      <input type="number" placeholder='Enter Nth Number' onChange={(e) => setFibnocciNumber(e.target.value)} />
      <p>{find_fibnocci(fibnocciNumber)}</p>
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
