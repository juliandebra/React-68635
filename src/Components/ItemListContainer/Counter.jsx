import styles from './Item.module.css'

const Counter = ({ contador, sumar, restar }) => {
  return (
    <div className={styles.btnGrp}>
      <button disabled={contador === 0} onClick={restar}>
        -
      </button>
      <h3>{contador}</h3>
      <button onClick={sumar}>+</button>
    </div>
  )
}

export default Counter
