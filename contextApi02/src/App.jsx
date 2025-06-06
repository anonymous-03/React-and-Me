import Card from './components/Card'
import './App.css'
import ThemeButton from './components/ThemeButton'
import ThemeContextProvider from './context/ThemeContextProvider'
import React from 'react';
function App() {
  

  return (
    <ThemeContextProvider>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        <ThemeButton />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Load More
        </button>
      </div>
      <footer className="text-center p-4 bg-gray-800 text-white mt-8">
        &copy; 2023 Your Company. All rights reserved.
      </footer>
      <div className="fixed bottom-0 right-0 p-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Scroll to Top
        </button>
      </div>
      <div className="fixed bottom-0 left-0 p-4">
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Contact Us
        </button>
      </div>
      <div className="fixed top-0 left-0 p-4">
        <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Help
        </button>
      </div>
      <div className="fixed top-0 right-0 p-4">
        <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          Settings
        </button>
      </div>
   </ThemeContextProvider>
  )
}

export default App;
