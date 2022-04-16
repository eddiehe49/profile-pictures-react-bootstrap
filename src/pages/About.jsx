import React from "react";
import '../App.css';
import logo from "../logo.svg"

function About(params) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <strong>What are avatars?</strong>
                    <br />
                    Check out this <a href="https://web.okjike.com/u/60001f57-6fec-4ad1-963b-51ebdf913f8c" target="_blank" rel="noopener noreferrer" style={{ color: "#0d6efd" }}>
                        site
                    </a> on your desktop browser.
                    <br />
                    Do you see the round picture in the top-left corner of every post? That's my avatar!
                </p>
                <p>
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
                    <a className="App-link" href="https://jsonbin.io/" target="_blank" rel="noopener noreferrer">
                        JSONBIN
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