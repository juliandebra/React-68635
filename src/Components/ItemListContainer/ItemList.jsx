import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  console.log(productos);
  return (
    <div>
      {productos.map((e) => (
        <Item
          key={e.id}
          titulo={e.titulo}
          descripcion={e.descripcion}
          precio={e.precio}
          id={e.id}
        />
      ))}
    </div>
  );
};

export default ItemList;
