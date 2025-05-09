import React from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "../Components/NotFound/NotFound";
import { useCartStates } from "../context/ContextProvider";

const Cart = () => {
  const { cart, total, setCart } = useCartStates();
  const navigate = useNavigate();

  /**
   * @Functions
   */
  const irHome = () => {
    navigate("/");
  };

  const eliminarProducto = (id) => {
    // FILTRAR EL ARRAY CART POR PRODUCTO ID
    setCart(cart.filter((e) => e.id !== id));
  };

  /**
   * @Components
   */
  if (!cart.length) {
    return (
      <NotFound
        titulo={"Carrito Vacio"}
        descripcion="Tienes que agregar productos en el Home"
        onClick={irHome}
        label={"Ir a Home"}
      />
    );
  }

  return (
    <div>
      <h1>Mi carrito de compras</h1>
      {/**
       * Mensaje not found
       */}
      {cart.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.title}</h3>
          <img src={prod.image} alt="" width={80} />
          <h4>${prod.price}</h4>
          <h4>Cantidad: {prod.quantity}</h4>
          <h2>Subtotal: ${prod.price * prod.quantity}</h2>
          <button
            onClick={() => {
              eliminarProducto(prod.id);
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
      <h1>Precio final: ${total}</h1>
    </div>
  );
};

export default Cart;
