import { useEffect, useState } from 'react'

const Counter = () => {
  const [contador, setContador] = useState(0)
  const [name, setName] = useState('')
  console.log('Parte funcional')
  const sumar = () => {
    setContador(contador + 1)
  }
  const restar = () => {
    setContador(contador - 1)
  }
  //Montaje
  useEffect(() => {
    console.log('Se terminó de montar el componente')
  }, [])

  //Actualización
  useEffect(() => {
    console.log('Esto se ejecuta cuando contador se actualiza')
  }, [contador, name])

  //Desmontaje
  useEffect(() => {
    return () => {
      console.log('Se desmontó mi componente')
    }
  }, [])

  return (
    <div>
      {console.log('Parte de render')}
      <button onClick={restar}>-</button>
      <h3>{contador}</h3>
      <button onClick={sumar}>+</button>
    </div>
  )
}

export default Counter
