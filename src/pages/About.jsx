import React from "react";
import '../App.css';
import logo from "../logo.svg";
import { useEffect, useContext } from "react";
import waline from '../services/Waline.js';
import { Button } from 'react-bootstrap';
import { tipsModal } from "../App";


function About(params) {
    const { setTipsModalShow } = useContext(tipsModal)

    useEffect(() => {
        waline.update()
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
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