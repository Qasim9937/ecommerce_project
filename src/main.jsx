import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProductsProvider from './contexts/ProductsData.jsx';


import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsProvider>
    
  </StrictMode>,
)
