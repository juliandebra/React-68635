import React from 'react'
import { useCartStates } from '../context/ContextProvider'

const Cart = () => {
  const { cart, total } = useCartStates()
  return (
    <div>
      <h1>Mi carrito de compras</h1>
      {cart.map(prod => (
        <div key={prod.id}>
          <h3>{prod.title}</h3>
          <img src={prod.image} alt='' width={80} />
          <h4>${prod.price}</h4>
          <h4>Cantidad: {prod.quantity}</h4>
          <h2>Subtotal: ${prod.price * prod.quantity}</h2>
        </div>
      ))}
      <h1>Precio final: ${total}</h1>
    </div>
  )
}

export default Cart
