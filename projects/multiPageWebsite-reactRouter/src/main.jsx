import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { About, Contact, Home, Github, Post } from './components'
import { gitDataFetch } from './components/Github/Github'



// Method 1 to create router
// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       },
//       {
//         path: "github",
//         element: <Github/>,
//         loader: gitDataFetch,
//       },
//        {
//         path: "posts/:postname",
//         element: <Post/>,
        
//       }

//     ]
//   }
// ])

//Method 2 to create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>} >
      <Route path='' element ={<Home/>} />
      <Route path='about' element ={ <About/>} />
      <Route path='contact' element ={<Contact/>} />
      <Route path='github' element ={<Github/>} loader ={gitDataFetch} />
      <Route path='post/:postname' element ={<Post/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
