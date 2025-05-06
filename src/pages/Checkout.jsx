import React, { useState } from 'react'
import { validateName } from '../helpers/validations'

const Checkout = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    tel: '',
  })

  console.log('user', user)

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    //Validaciones
    if (validateName(user.name) && regexEmail.test(user.email)) {
      alert('Compra finalizada')
      // Envio a firebase
      // Datos de usuario
      // Total de compra
      // Items del carrito
      //
    } else {
      alert('Campos invalidos')
    }
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

      {/* <h3>Nombre: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Telefono: {user.tel}</h3> */}
    </div>
  )
}

export default Checkout

//Como se trabaja en JS vanilla
// const form = document.querySelector('form')

// form.addEventListener('submit', () => {
//   const name = document.getElementById('input-name').value

//   //Envio mi info a  una api
// })
