import React from "react";
import './App.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, Outlet, useLocation } from "react-router-dom"
import { useState, createContext } from "react";
import { Modal, Button } from 'react-bootstrap';


export const tipsModal = createContext()

function App(params) {
  const [tipsModalShow, setTipsModalShow] = useState(true);

  // console.log("useLocation: ", useLocation())
  return (
    <tipsModal.Provider value={{ setTipsModalShow }}>
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
        <Modal show={tipsModalShow} onHide={() => { setTipsModalShow(false) }} centered>
          <Modal.Header className="componentsDarkMode">
            <Modal.Title>Tips</Modal.Title>
          </Modal.Header>
          <div className="componentsDarkMode">
            <ul>
              <li><span style={{ fontSize: "medium", fontWeight: "bold" }}>There is a like button.</span><br />Give your preferred picture a thumb up!</li>
              <br />
              <li><span style={{ fontSize: "medium", fontWeight: "bold" }}>Scroll down!</span><br />Have fun in the comment section.</li>
            </ul>
          </div>
          <Modal.Footer className="componentsDarkMode">
            <Button variant="primary" onClick={() => { setTipsModalShow(false) }}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </div >
    </tipsModal.Provider>
  );
}


export default App;
