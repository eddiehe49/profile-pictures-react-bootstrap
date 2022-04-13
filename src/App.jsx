import React from "react";
import './App.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, Outlet, useLocation } from "react-router-dom"


function App(params) {
  // console.log("useLocation: ", useLocation())
  return (
    < div className="App" >
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand to="/" as={Link}>Eddie's Avatars</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Avatar" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/" disabled={useLocation().pathname === "/" ? "true" : null}>Avatar-React</NavDropdown.Item>
                <NavDropdown.Item href="">Avatar-Vue</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="http://my-json-server.typicode.com/Eddie-He-090/avatar-json/" target="_blank" rel="noopener noreferrer">avatar-JSONPlaceholder</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Favicon" id="collasible-nav-dropdown" variant="dark">
                <NavDropdown.Item href="">Favicon-React</NavDropdown.Item>
                <NavDropdown.Item href="">Favicon-Vue</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">favicon-jsonplaceholder</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link to="/about" as={Link}>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div >
  );
}


export default App;
