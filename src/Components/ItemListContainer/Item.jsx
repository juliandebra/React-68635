import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Boton from '../Boton/Boton'
import Counter from '../Counter'
import styles from './Item.module.css'
// console.log(styles)
const Item = ({ id, title, description, price, image, children }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className={styles.description}>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Boton
            type='success'
            label='Ver producto'
            onClick={() => {
              console.log(title)
              console.log('PRODUCTO ID ', id)
            }}
          />
          {children}
          <Counter />
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item
