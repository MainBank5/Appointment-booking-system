import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import './firebaseConfig'; 

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client = {queryClient}>
        <App />
     </QueryClientProvider>
    </Router>
  </React.StrictMode>,
)
