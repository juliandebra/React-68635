import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader/Loader'
import Counter from '../Components/ItemListContainer/Counter'
import { useCartStates } from '../context/ContextProvider'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [contador, setContador] = useState(0)
  const { cart, setCart } = useCartStates()
  const { id } = useParams()
  // console.log(id)
  const url = 'https://fakestoreapi.com/products/' + id

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducto(data)
        // console.log(data)
      })
  }, [])

  const sumar = () => {
    setContador(contador + 1)
  }
  const restar = () => {
    setContador(contador - 1)
  }
  const addCart = () => {
    producto.quantity = contador
    setCart([...cart, producto])
  }
  return (
    <div>
      <>
        <img src={producto.image} alt='' width={200} />
        <h2>{producto.title}</h2>
        <p>{producto.description}</p>
        <Counter contador={contador} sumar={sumar} restar={restar} />
        <h4>Precio: ${producto.price}</h4>
        <button disabled={contador < 1} onClick={addCart}>
          Agregar al carrito
        </button>
      </>
    </div>
  )
}

export default ItemDetailContainer
