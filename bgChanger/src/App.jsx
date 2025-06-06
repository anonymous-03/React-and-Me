import { useState } from 'react'



function App() {

  let [color,setColor]=useState('olive')

  return (
    <>
      <div className='w-full h-screen text-black-500' style={{ backgroundColor: color }}>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-4xl font-bold mb-4'>Background Color Changer</h1>
          <p className='text-lg mb-8'>Click the button to change the background color</p>
          <div className="flex flex-wrap justify-content -center">
            <button
              onClick={() => setColor('Blue')}
              className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300    cursor-pointer'
            >
              Blue
            </button>
            <button
              onClick={() => setColor('Green')}
              className='px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ml-4   cursor-pointer' >Green
            </button>
            <button
              onClick={() =>  setColor('Red')}
              className='px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 ml-4  cursor-pointer'>Red
            </button>
            <button
              onClick={() =>setColor('Yellow')}
              className='px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition duration-300 ml-4 cursor-pointer'>Yellow
            </button>
            <button
            onClick={()=>{setColor('Purple')}}
              className='px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 ml-4 cursor-pointer'>Purple
            </button>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
