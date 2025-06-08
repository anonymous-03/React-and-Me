import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Routes } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import { RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Github,{loader} from './components/Github/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//       {
//         path: '/about',
//         element: <About />,
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="user/:userId" element={<User />} />
            <Route path='github/:userId' loader={loader} element={<Github />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
    )
)


createRoot(document.getElementById('root')).render(
    // Tarikaa 1
  <RouterProvider router={router} />

//   Tarikaa 2 (Iss method se loader use nahi kr paa rhe the)
//   <BrowserRouter>
//     <Routes>
//         <Route path="/" element={<App />}>
//             <Route index element={<Home />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="about" element={<About />} />
//             <Route path="user/:userId" element={<User/>} />
//             <Route path='/github/:userId' loader={<loader />} element={<Github/>} />
//         </Route>
//         <Route path="*" element={<h1>404 Not Found</h1>} />
//     </Routes>
//     </BrowserRouter>
    
)
