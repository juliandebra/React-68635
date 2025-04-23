import React from 'react'
import ChildComp from './ChildComp'
import Counter from './Counter'
import CartWidget from './Header/CartWidget'

const ParentComp = () => {
  const text = 'Algún texto'
  const lista = ['Inicio', 'Contacto', 'About']
  return (
    <div>
      <h1>Componente Padre</h1>
      <ChildComp texto={text} arr={lista}>
        {info => <Counter info={info} />}
      </ChildComp>

      <ChildComp>
        <CartWidget />
      </ChildComp>
    </div>
  )
}

export default ParentComp
