import React from 'react';
import './Home.css';
import logo from './img/logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Error extends React.Component {

    constructor(props) {
        super(props); 
    }

    render() {
        return (
            
            <div>
                <header>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                        <a id="logo"><img className="unselected clickable" src={logo}/></a>
                    </Link>
                    <nav>
                        <Link to={process.env.PUBLIC_URL + "/about"}>
                            <a className={"unselected clickable"}>About</a>
                        </Link>
                        <Link to={process.env.PUBLIC_URL + "/portfolio"}>
                            <a className={"unselected clickable"}>Portfolio</a>
                        </Link>
                        <Link to={process.env.PUBLIC_URL + "/art"}>
                            <a className={"unselected clickable"}>Art&amp;Design</a>
                        </Link>
                    </nav>
                </header>
                <h1>Oops!</h1>
                <h2>The page you requested could not be found. :/</h2>
                <Link to={process.env.PUBLIC_URL + "/"}>
                        <h2 ref='pastworks' className="blurbs">
                            <div className="action-link"><a className="pastworks clickable">Return to home page.</a></div>
                        </h2>
                    </Link>
            </div>
        );
    }
}

export default Error;