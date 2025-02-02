import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ContextComponents from './context/ContextComponents.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextComponents>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ContextComponents>
  </React.StrictMode>,
)
