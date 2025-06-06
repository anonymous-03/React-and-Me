import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Outlet } from 'react-router';

function App() {
  

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
    );
  
}

export default App
