import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [categoria, setCategoria] = useState('')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProductos(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
