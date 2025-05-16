import React, { useEffect, useState } from 'react'
import ItemList from '../Components/ItemListContainer/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/firebaseServices'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const { category } = useParams()

  useEffect(() => {
    getProducts().then(res => {
      setProductos(res)
    })
  }, [category])

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
