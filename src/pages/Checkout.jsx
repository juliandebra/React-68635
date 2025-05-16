import React, { useState } from 'react'
import { validateName } from '../helpers/validations'
import { useCartStates } from '../context/ContextProvider'
import {
  createOrder,
  createOrderAndUpdateStock,
} from '../services/firebaseServices'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    tel: '',
  })
  const { cart, total, setCart } = useCartStates()

  const navigate = useNavigate()

  const handleChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    //Validaciones
    if (!validateName(user.name) && !regexEmail.test(user.email)) {
      alert('Campos invalidos')
      return
    }

    const newOrder = {
      buyer: user,
      items: cart,
      total: total,
    }
    console.log('newOrder', newOrder)
    const res = await createOrderAndUpdateStock(newOrder)
    alert('Gracias por tu compra. Tu id de compra es: ' + res.id)
    setCart([])
    // navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input
          type='text'
          name='name'
          value={user.name}
          onChange={handleChange}
        />
        <label>Email: </label>
        <input
          type='email'
          name='email'
          value={user.email}
          onChange={handleChange}
        />
        <label>Telefono: </label>
        <input
          type='number'
          name='tel'
          value={user.tel}
          onChange={handleChange}
        />
        <button>Finalizar compra</button>
      </form>
    </div>
  )
}

export default Checkout
