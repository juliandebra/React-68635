import { useState } from "react";
import { Boton, Header, ItemListContainer } from "./Components";

function App() {
  const [count, setCount] = useState(10);
  const [texto, setTexto] = useState("Hola!");

  const aumentar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    if (count - 1 >= 0) setCount(count - 1);
  };

  const despedirme = () => {
    setTexto("Chau!");
  };

  return (
    <>
      <Header />
      <Boton
        type={"success"}
        style={{ width: "200px" }}
        label={"Aumentar Count"}
        onClick={aumentar}
      />
      <Boton label={"Restar Count"} type={"danger"} onClick={restar} />
      <h1>Hola coders! {count}</h1>
      <h1>{texto}</h1>
      <Boton label={"Despedirme"} type={"primary"} onClick={despedirme} />

      <ItemListContainer />
    </>
  );
}

export default App;
