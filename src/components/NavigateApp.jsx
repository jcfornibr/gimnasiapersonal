import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '../styles/header.css'

export const NavigateApp = () => {
  return (
    <Navbar expand="lg" className="header">
      <Container className='headerContainer'>
        <Navbar.Brand href="/">Exercitame Iá!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/'>Inicio</NavLink>
            <NavDropdown title="Temáticas" id="basic-nav-dropdown">
              <NavDropdown.Item href='/gymexercise'>Entrenamiento Personal</NavDropdown.Item>
            </NavDropdown>
            <NavLink to='/nosotros'>Nosotros</NavLink>
            <NavLink to='/contacto'>Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
