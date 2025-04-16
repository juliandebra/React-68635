import React, { useEffect, useState } from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
  const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
  const [poke, setPoke] = useState({})

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPoke(data)
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      {poke.name}
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
