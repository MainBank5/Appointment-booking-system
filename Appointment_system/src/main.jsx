import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import './firebaseConfig'; 
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify CSS here
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client = {queryClient}>
      <ToastContainer />
        <App />
     </QueryClientProvider>
    </Router>
  </React.StrictMode>,
)
