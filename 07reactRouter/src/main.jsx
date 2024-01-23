import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout/Layout'
// import Contact from './components/Contact/Contact'
// import About from './components/About/About'
import Home from './components/Home/Home'
import {Contact,About} from './Index.jsx/Index'
import UserId from './components/UserId/UserId'
import Github, {githubInfoLoader } from './components/Github/Github'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path = '/:userId' element={<UserId/>} />
        <Route path = '/github' element={<Github/>} loader={githubInfoLoader}/>
    </Route>
  )
 )

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children:[
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: '/about',
//         element: <About />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />, 
//       }
//     ]
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
