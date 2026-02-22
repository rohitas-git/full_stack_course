import { useState, useMemo } from 'react'
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

      {/* <div className="card">
        <Counter label="Users" initialValue={10} />
        <Counter label="Alerts" initialValue={2} />
      </div> */}
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
  const [fibonacciNumber, setFibonacciNumber] = useState(0);

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

  // useMemo is used to memoize the value of fibValue
  // It will only recompute the value when the dependency changes
  // Optimized Iterative Approach:
  // Time Complexity: O(n)
  // Space Complexity: O(1)
  const fibValue = useMemo(() => {
    const n = parseInt(fibonacciNumber) || 0;
    if (n < 0) return 0;
    if (n <= 1) return n;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }, [fibonacciNumber]);

  // Recursive Approach with Memoization (inside useMemo)
  // Time Complexity: O(n)
  // Space Complexity: O(n)
  const fibValueRecursive = useMemo(() => {
    const n = parseInt(fibonacciNumber) || 0;
  

    // Memoization cache
    const memo = {};
    function fib(num) {
      if (num < 0) return 0;
      if (num <= 1) return num;
      if (memo[num]) return memo[num];
      
      // Calculate and store in cache
      memo[num] = fib(num - 1) + fib(num - 2);
      return memo[num];
    }
    return fib(n);
  }, [fibonacciNumber]);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h3>{label || "Counter"}</h3>
      <p>Count: {count}</p>
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
        <input type="number" onChange={(e) => setNumber1(e.target.value)} />
        <button onClick={multiplcation}>*</button>
        <button onClick={division}>/</button>
        <input type="number" onChange={(e) => setNumber2(e.target.value)} />
      </div>

      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
        <input type="text" onChange={(e) => setSearchQuery(e.target.value)} />
        <button onClick={search}>Search</button>
        <ul>
          {listOfNames.map((name, index) => <li key={index}>{name}</li>)}
        </ul>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
        <input type="number" placeholder='Enter Nth Number' onChange={(e) => setFibonacciNumber(e.target.value)} />
        <p>{fibValue}</p>
      </div>
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
