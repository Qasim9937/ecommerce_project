import {Routes, Route, useLocation} from 'react-router-dom'

// components
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/index'
import About from './pages/About'
import Shipping from './pages/Shipping'
import Blog from './pages/Blog'
import Services from './pages/Services'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'

import ProductsProvider from './contexts/ProductsData'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
let navbar


function App() {

  const noNavbar = ['/login', '/register']
  const {pathname} = useLocation(); 
 
  if(noNavbar.includes(pathname)) {
    navbar = ''
  }else{
    navbar = <Navbar />
  }

  return (
    <ProductsProvider>
   
      
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/products/:id' element={<ProductDetails />} />
      </Routes>
      
    </ProductsProvider>
  )
}

export default App
