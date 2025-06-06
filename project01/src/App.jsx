import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue=()=>{
    if(count<20)setCount(count+1);
    console.log(count);
  }
   const decValue=()=>{
    if(count>0)setCount(count-1);
  }
  return (
    <>
    
     <div className="card">
        <button onClick={addValue}>Count is {count}</button>
        <br></br>
        <button onClick={decValue}>Count is {count}</button>
     </div>
     
    </>
  )
}

export default App
