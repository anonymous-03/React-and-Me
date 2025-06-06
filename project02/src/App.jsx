import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <div className="bg-gray-100 text-3xl text-black p-4 rounded-2xl">Tailwind</div>
      <Card Productname="Nikhil Raj" chutiyaapa="Tum chutiye ho"/>
      <Card Productname="draame baaji band krro boldo" chutiyaapa="Tum chutiye ho"/>
    </>
  )
}

export default App
