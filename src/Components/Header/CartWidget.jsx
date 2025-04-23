import styles from './Header.module.css'

const CartWidget = () => {
  return (
    <div className={styles.cartWidget}>
      <p>
        🛒 <span>0</span>
      </p>
    </div>
  )
}

export default CartWidget
