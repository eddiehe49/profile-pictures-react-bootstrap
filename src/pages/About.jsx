import React from "react";
import '../App.css';
import logo from "../logo.svg";
import { useEffect, useState, useContext } from "react";
import waline from '../services/Waline.js';
import { Button, Offcanvas } from 'react-bootstrap';
import { tipsModal } from "../App";


function OffCanvasExample({ name, ...props }) {
    const [offcanvasShow, setOffcanvasShow] = useState(false);
    return (
        <div style={{ padding: "2% 0 0 0" }}>
            <Button variant="primary" onClick={() => { setOffcanvasShow(true) }} className="me-2">
                What are avatars?
            </Button>
            <Offcanvas show={offcanvasShow} onHide={() => { setOffcanvasShow(false) }} {...props} className="componentsDarkMode">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>What are avatars?</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Check out this <a href="https://web.okjike.com/u/60001f57-6fec-4ad1-963b-51ebdf913f8c" target="_blank" rel="noopener noreferrer" style={{ color: "#0d6efd" }}>
                        site
                    </a> on your desktop browser.
                    <br />
                    Do you see the round picture in the top-left corner of every post?
                    <br />
                    That's my avatar!
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

function About(params) {
    const { setTipsModalShow } = useContext(tipsModal)
    useEffect(() => {
        waline.update()
    }, [])
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* <OffCanvasExample placement={"bottom"} name={"bottom"} /> */}
                <Button variant="primary" onClick={() => { setTipsModalShow(true) }} className="me-2" style={{ margin: "2% 0 0 0" }}>
                    Tips
                </Button>
                <p style={{ padding: "5% 0 0 0" }}>
                    Powerd by&nbsp;
                    <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        React
                    </a>
                    &nbsp;<code>&</code>&nbsp;
                    <a className="App-link" href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">
                        React-Bootstrap
                    </a>
                    &nbsp;<code>&</code>&nbsp;
                    <a className="App-link" href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">
                        JSONPlaceholder
                    </a>
                    &nbsp;<code>&</code>&nbsp;
                    <a className="App-link" href="https://krat.es/" target="_blank" rel="noopener noreferrer">
                        Krates
                    </a>
                    &nbsp;<code>&</code>&nbsp;
                    <a className="App-link" href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
                        Vercel
                    </a>
                </p>
                <p>Coded by&nbsp;
                    <a className="App-link" href="https://eddiehe.super.site/" target="_blank" rel="noopener noreferrer">
                        Eddie He
                    </a>
                </p>
            </header>
        </div>
    )
}

export default About;