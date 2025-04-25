import React, { useEffect, useState } from 'react'
import ItemList from '../Components/ItemListContainer/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [categoria, setCategoria] = useState('')
  console.log(productos)
  const { category } = useParams()
  console.log(category)
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
  //Falta hacer filtro por categoría
  const filteredList = category
    ? productos.filter(prod => prod.category.includes(category))
    : productos

  console.log(' filteredList', filteredList)
  return (
    <div>
      <ItemList productos={filteredList} />
    </div>
  )
}

export default ItemListContainer
