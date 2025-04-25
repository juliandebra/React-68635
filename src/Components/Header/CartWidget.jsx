import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const CartWidget = () => {
  return (
    <div className={styles.cartWidget}>
      <Link to='/cart'>
        🛒 <span>0</span>
      </Link>
    </div>
  )
}

export default CartWidget
