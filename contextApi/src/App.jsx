import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import UserContextProvider from './context/UserContextProvider';
function App() {
  return (
    <UserContextProvider>
      <Form />
    </UserContextProvider>
  )
}

export default App
