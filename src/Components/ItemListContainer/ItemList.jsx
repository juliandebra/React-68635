import React, { useEffect, useState } from 'react'
import Item from './Item'
import styles from './Item.module.css'
const ItemList = ({ productos }) => {
  return (
    <div className={styles['list-container']}>
      {productos.map(e => (
        <Item
          key={e.id}
          image={e.image}
          title={e.title}
          description={e.description}
          price={e.price}
          id={e.id}
        />
      ))}
    </div>
  )
}

export default ItemList
