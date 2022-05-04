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
          <Navbar.Brand to="/" as={Link}>Eddie's Profile Pictures</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Profile Pictures" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/" disabled={useLocation().pathname === "/" ? true : null}>DarkMode</NavDropdown.Item>
                <NavDropdown.Item href="https://eddiehe-profile-pictures-lightmode.onrender.com/" rel="noopener noreferrer">LightMode</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://my-json-server.typicode.com/eddiehe49/profile-pictures/" target="_blank" rel="noopener noreferrer">avatars-JSONPlaceholder</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Favicon" id="collasible-nav-dropdown" variant="dark">
                <NavDropdown.Item href="https://eddiehe-favicons.vercel.app/" rel="noopener noreferrer">Auto</NavDropdown.Item>
                <NavDropdown.Item href="https://eddiehe-favicons-darkmode.vercel.app/" rel="noopener noreferrer">DarkMode</NavDropdown.Item>
                <NavDropdown.Item href="https://eddiehe-favicons-lightmode.onrender.com/" rel="noopener noreferrer">LightMode</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://my-json-server.typicode.com/eddiehe49/favicons/" target="_blank" rel="noopener noreferrer">favicons-JSONPlaceholder</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link to="/about" as={Link} disabled={useLocation().pathname === "/about" ? true : null}>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div >
  );
}


export default App;
