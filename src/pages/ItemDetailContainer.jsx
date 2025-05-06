import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader/Loader'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const { id } = useParams()
  console.log(id)
  const url = 'https://fakestoreapi.com/products/' + id

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducto(data)
        console.log(data)
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
  }, [])

  return (
    <div>
      <>
        <img src={producto.image} alt='' width={200} />
        <h2>{producto.title}</h2>
        <p>{producto.description}</p>
      </>
    </div>
  )
}

export default ItemDetailContainer
