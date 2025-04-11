import { useState } from 'react'

const Counter = () => {
  const [contador, setContador] = useState(0)
  const sumar = () => {
    setContador(contador + 1)
  }
  const restar = () => {
    setContador(contador - 1)
  }
  // useEffect(() => {}, [])

  return (
    <div>
      <button onClick={restar}>-</button>
      <h3>{contador}</h3>
      <button onClick={sumar}>+</button>
    </div>
  )
}

export default Counter

// const useState = valorInicial => {
//   let estado = valorInicial

//   function setEstado(valorNuevo) {
//     estado = valorNuevo
//   }

//   return [estado, setEstado]
// }
