import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </AuthProvider>
    <Toaster position="top-center" reverseOrder={false} />
  </React.StrictMode>,
)
