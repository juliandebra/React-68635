import { Button } from 'react-bootstrap'

import React from 'react'

const Boton = ({ label, type, onClick, ...rest }) => {
  // console.log(onClick);
  return (
    <>
      <Button variant={type} onClick={onClick} {...rest}>
        {label}
      </Button>
    </>
  )
}

export default Boton
