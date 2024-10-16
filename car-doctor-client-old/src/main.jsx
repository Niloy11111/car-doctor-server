import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


import router from './Routes/Routes';
import AuthProvider from './AuthProvider/AuthProvider';
const queryClient = new QueryClient() ;


ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='max-w-7xl mx-auto'>
      <React.StrictMode>
      <QueryClientProvider client={queryClient}>
   <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </QueryClientProvider>
 
  </React.StrictMode>,
  </div>
)
