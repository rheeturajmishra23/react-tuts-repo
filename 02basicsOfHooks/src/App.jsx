import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(15)
  const incrementCount = () => {
    if(count < 20)
      setCount(count + 1)
  }
  const decrementCount = () => {
    if(count > 0)
      setCount(count - 1)
  }
  return (
    <>
      <h2>Counter :  {count} </h2>
      <button onClick={incrementCount} >Increment {count}</button>
      <br/>
      <button onClick={decrementCount} >Decrement {count}</button>      
    </>
  )
}

export default App
