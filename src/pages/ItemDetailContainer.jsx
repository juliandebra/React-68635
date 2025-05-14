import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader/Loader'
import Counter from '../Components/ItemListContainer/Counter'
import { useCartStates } from '../context/ContextProvider'
import NotFound from '../Components/NotFound/NotFound'
import { getProductoById } from '../services/productos'
import '../index.css'
import { getProductById } from '../services/firebaseServices'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [contador, setContador] = useState(0)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { cart, setCart } = useCartStates()
  const { id } = useParams()

  /**
   * @Functions
   */
  // const getData = async () => {
  //   try {
  //     const response = await getProductoById(id)
  //     setProducto(response)
  //   } catch (error) {
  //     setError(true)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

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

  /**
   * @UseEffects
   */
  useEffect(() => {
    getProductById(id)
      .then(res => {
        console.log(res)
        setProducto(res)
      })
      .catch(err => {
        setError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
    // getData()
  }, [])

  /**
   * @Componets
   */
  // if (isLoading) return <Loader />;

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <NotFound
          titulo={`Hubo un problema con el Producto ${id}`}
          descripcion='Vuelve a intentarlo mas tarde.'
          onClick={getProductoById}
        />
      )}
      {!error && (
        <div>
          <>
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
          </>
        </div>
      )}
    </>
  )
}

export default ItemDetailContainer
