import React from 'react'
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import CartWidget from './CartWidget'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Link to='/'>Home</Link>

            <Link to='/about'>About</Link>

            <Dropdown>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to='/category/men'>Clothing</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to='/category/electronics'>Electronics</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to='/category/jewelery'>Jewelery</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Button onClick={() => navigate(-1)}>Volver para atrás</Button> */}
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
    </>
  )
}

export default Header
