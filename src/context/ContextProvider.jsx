import { createContext, useContext, useState } from 'react'

const CartStates = createContext()

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const total = cart.reduce(
    (acumulador, producto) => acumulador + producto.price * producto.quantity,
    0
  )
  const cantidadItems = cart.reduce(
    (acumulador, producto) => acumulador + producto.quantity,
    0
  )
  //   const [message, setMessage] = useState('Lo logré')
  console.log(cart)
  return (
    <CartStates.Provider
      value={{
        cart,
        // message,
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
