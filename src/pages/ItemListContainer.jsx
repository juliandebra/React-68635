import React, { useEffect, useState } from 'react'
import ItemList from '../Components/ItemListContainer/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const { category } = useParams()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProductos(
          category
            ? data.filter(prod => prod.category.includes(category))
            : data
        )
      })
      .catch(err => {
        console.log(err)
      })
  }, [category])

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
