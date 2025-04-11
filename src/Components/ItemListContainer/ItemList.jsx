import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
  console.log(productos)

  const mapList = productos.map(producto => {
    // console.log(producto)
    return (
      <div>
        <h3>{producto.titulo}</h3>
      </div>
    )
  })

  console.log(mapList)
  return (
    <div>
      {mapList}
      {productos.map(e => (
        <Item
          key={e.id}
          titulo={e.titulo}
          descripcion={e.descripcion}
          precio={e.precio}
          id={e.id}
        />
      ))}
    </div>
  )
}

export default ItemList
