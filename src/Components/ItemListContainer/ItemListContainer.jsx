import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [categoria, setCategoria] = useState("");
  const productos = [
    {
      id: 1,
      titulo: "Producto 1",
      descripcion: "Descripcion 1",
      precio: "100",
    },
    {
      id: 2,
      titulo: "Producto 2",
      descripcion: "Descripcion 2",
      precio: "100",
    },
    {
      id: 3,
      titulo: "Producto 3",
      descripcion: "Descripcion 3",
      precio: "100",
    },
    {
      id: 4,
      titulo: "Producto 4",
      descripcion: "Descripcion 4",
      precio: "100",
    },
    {
      id: 5,
      titulo: "Producto 5",
      descripcion: "Descripcion 5",
      precio: "100",
    },
  ];

  return <ItemList productos={productos} />;
};

export default ItemListContainer;
