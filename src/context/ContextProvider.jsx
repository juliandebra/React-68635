import { createContext, useContext, useState } from 'react'

const CartStates = createContext()

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
  const cantidadItems = cart.reduce((acc, prod) => acc + prod.quantity, 0)
  console.log('cart', cart)
  return (
    <CartStates.Provider
      value={{
        cart,
        setCart,
        total,
        cantidadItems,
      }}
    >
      {children}
    </CartStates.Provider>
  )
}
export default ContextProvider

export const useCartStates = () => useContext(CartStates)
