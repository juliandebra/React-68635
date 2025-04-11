import React, { useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {
  const [categoria, setCategoria] = useState('')

  const productos = [
    {
      id: 1,
      titulo: 'Producto 1',
      descripcion: 'Descripcion 1',
      precio: '100',
    },
    {
      id: 2,
      titulo: 'Producto 1',
      descripcion: 'Descripcion 2',
      precio: '100',
    },
    {
      id: 3,
      titulo: 'Producto 3',
      descripcion: 'Descripcion 3',
      precio: '100',
    },
    {
      id: 4,
      titulo: 'Producto 4',
      descripcion: 'Descripcion 4',
      precio: '100',
    },
    {
      id: 5,
      titulo: 'Producto 5',
      descripcion: 'Descripcion 5',
      precio: '100',
    },
  ]

  const promesa = new Promise((resolve, reject) => {
    resolve('Promesa resuelta')
    // reject('Promesa no cumplida')
  })

  promesa
    .then(res => {
      // console.log('Result: ', res)
    })
    .catch(err => {
      console.log('Error: ', err)
    })

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
      // reject('Error')
    }, 3000)
  })

  promise
    .then(res => {
      // console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
