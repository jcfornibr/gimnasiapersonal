import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import '../styles/header.css'

export const NavigateApp = ({logIn, logOut, auth}) => {
  return (
    <Navbar expand="lg" className="header">
      <Container className='headerContainer'>
        <Navbar.Brand href="/">Entrename IÁ!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/'>Inicio</NavLink>
            <NavDropdown title="Temáticas" id="basic-nav-dropdown">
              <NavDropdown.Item href='/gymexercise'>Entrenamiento Personal</NavDropdown.Item>
            </NavDropdown>
            <NavLink to='/nosotros'>Nosotros</NavLink>
            <NavLink to='/contacto'>Contacto</NavLink>
            {
              auth && (<NavLink to='/admin'>Admin</NavLink>)
            }
          </Nav>
          <Button variant="info" onClick={() => auth ? logOut() : logIn()}>
            {auth ? 'Log Out' : 'Log In'}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
