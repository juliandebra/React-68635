import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { useCartStates } from '../../context/ContextProvider'

const CartWidget = () => {
  const { cantidadItems } = useCartStates()
  return (
    <div className={styles.cartWidget}>
      <Link to='/cart'>
        🛒 <span>{cantidadItems}</span>
      </Link>
    </div>
  )
}

export default CartWidget
