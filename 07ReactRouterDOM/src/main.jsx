import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Pages/Home.jsx'
import About from './Components/Pages/About.jsx'
import Contact from './Components/Pages/Contact.jsx'
import User from './Components/Pages/User.jsx'
import Github, { githubInfo } from './Components/Pages/Github.jsx'

// One way to create browser Routes
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact-us",
//         element:<Contact />
//       }
//     ]
//   }
// ])
// Another way to create browser routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact-us' element={<Contact/>}/>
      <Route path='user/:userid' element={<User />}/>
      <Route 
      loader={githubInfo}
      path='github' 
      element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
