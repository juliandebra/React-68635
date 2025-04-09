import { useState } from 'react'
import { Boton, Header, ItemListContainer } from './Components'
import Counter from './Components/Counter'

function App() {
  const [toggle, setToggle] = useState(true)
  //condicion ? true : false
  return (
    <>
      <Header />
      {toggle ? <Counter /> : null}
      <button onClick={() => setToggle(!toggle)}>
        Montar/Desmontar Componente
      </button>
      <ItemListContainer />
    </>
  )
}

export default App
