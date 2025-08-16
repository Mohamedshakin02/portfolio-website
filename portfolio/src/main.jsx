import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Movies from '../pages/Movies.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/movies",
      element: <Movies
    },
    // {
    //   path: "/photos",
    //   element: <Photos/ >
    // },
    // {
    //   path: "/others",
    //   element: <Others/ >
    // },
    // {
    //   path: "/about",
    //   element: <About/ >
    // },
    // {
    //   path: "/projects",
    //   element: <Projects/ >
    // }
    // ,
    // {
    //   path: "/Certifcates",
    //   element: <Certificates/ >
    // }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
