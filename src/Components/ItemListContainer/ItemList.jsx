import React, { useEffect, useState } from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
  return (
    <div>
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
