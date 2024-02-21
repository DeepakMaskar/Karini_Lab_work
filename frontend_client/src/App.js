import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import Pagenotfound from './pages/Pagenotfound'
//import App from './App'
import Search from './pages/Search'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
// import { useCart } from '../context/cart'
function App() {
  const [cartItems, setCartItems] = useState()
  const [items, setItems] = useState()
  // const [ite, setIte] = useCart()
  // if (ite) {
  //   setCartItems(ite)
  // }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage setCartItems={setCartItems} />} />
        <Route
          path="/search"
          element={<Search setCartItems={setCartItems} />}
        />
        {/* <Route path="/product/:slug" element={<ProductDetails />} /> */}
        <Route path="/policy" element={<Policy />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setItems={setItems} />}
        />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  )
}

export default App
