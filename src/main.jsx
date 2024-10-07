import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Curriculo from './pages/Curriculo.jsx'
import Contato from './pages/Contato.jsx'
import PaginaProjeto from './pages/PaginaProjeto.jsx'
const router = createBrowserRouter([{

  path: "/",
  element: <App/>,
  children: [
    {index:true, element: <HomePage/>},
    {path:"/sobre", element:<About/>},
    {path:"/projetos", element:<Projects/>},
    {path:"/curriculo", element:<Curriculo/>},
    {path:"/contato", element:<Contato/>},
    {path:"/projetos/:id", element:<PaginaProjeto/>}
  ]

}])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
