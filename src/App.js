import React from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Layout from './Components/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Notfound from './Components/Notfound/Notfound'

let routers = createBrowserRouter([
  {path:'',element:<Layout/>, children:[
    {index:true, element:<Home/>},
    {path:'about', element:<About/>},
    {path:'portfolio', element:<Portfolio/>},
    {path:'contact', element:<Contact/>},
    {path:'*', element:<Notfound/>},
  ]}
])

export default function App() {
  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}

