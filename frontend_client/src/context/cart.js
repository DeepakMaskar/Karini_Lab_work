import { useState, useContext, createContext } from 'react'

const CartContext = createContext()
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  // console.log(cart, 'this is cart*************')
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
