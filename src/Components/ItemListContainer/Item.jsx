import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Boton from '../Boton/Boton'
import Counter from '../Counter'
import styles from './Item.module.css'
// console.log(styles)
const Item = ({ id, titulo, descripcion, precio }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text className={styles.description}>{descripcion}</Card.Text>
          <Card.Text>{precio}</Card.Text>
          <Boton
            type='success'
            label='Ver producto'
            onClick={() => {
              console.log(titulo)
              console.log('PRODUCTO ID ', id)
            }}
          />
          <Counter />
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item
