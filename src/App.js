//react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import Register from './Pages/Register';
import ProductList from './Pages/ProductList'
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productlist" element={ <ProductList /> } />
            <Route path='/cart' element={ <Cart /> } />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App