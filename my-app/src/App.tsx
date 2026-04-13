import { useState } from 'react'
import './App.css'

function Button({ label, onClick }) {
  return (
    <button className="btn" onClick={onClick}> {label} </button>
  )
}

function App() {
  const [count, setCount] = useState(0);
  const label = "Click Me!";

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <Button label={label} onClick={handleClick}/>
    </>
  )
}

export default App