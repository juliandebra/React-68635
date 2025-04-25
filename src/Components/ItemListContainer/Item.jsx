import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Boton from '../Boton/Boton'
import Counter from './Counter'
import styles from './Item.module.css'
import { Link, useNavigate } from 'react-router-dom'
// console.log(styles)
const Item = ({ id, title, description, price, image, children }) => {
  const navigate = useNavigate()
  return (
    <div>
      <Card
        style={{
          width: '18rem',
          padding: 10,
        }}
      >
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className={styles.description}>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Counter />
          <Boton
            type='success'
            label='Ver producto'
            onClick={() => {
              console.log(title)
              console.log('PRODUCTO ID ', id)
              navigate('/item/' + id)
            }}
          />
          <Link to={'/item/' + id}>Ver detalle</Link>
          {/* {children} */}
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item
