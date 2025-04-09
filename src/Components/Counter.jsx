import { useEffect, useState } from 'react'

const Counter = () => {
  const lsContador = parseInt(localStorage.getItem('contador')) || 0
  const [contador, setContador] = useState(lsContador)
  const sumar = () => {
    setContador(contador + 1)
  }
  const restar = () => {
    setContador(contador - 1)
  }
  console.log(contador)

  useEffect(() => {
    // console.log('Se montó mi componente')
    localStorage.setItem('contador', contador)
  }, [contador])

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
