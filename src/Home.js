import React from 'react';
import Bounce from 'react-reveal/Bounce';
import logo from './img/logo.png';
import './Home.css';
import sr from './ScrollReveal'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <header>
                    <Link to="/">
                        <a id="logo"><img className="clickable" style={{opacity: 1}} src={logo}/></a>
                    </Link>
                    <nav>
                        <Link to="/about">
                            <a className={"unselected clickable"}>About</a>
                        </Link>
                        <Link to="/portfolio">
                            <a className={"unselected clickable"}>Portfolio</a>
                        </Link>
                    </nav>
                </header>
                <Bounce left delay={800}><div className="react"><p><i>{"< /> with "}<b>{"React."}</b></i>&nbsp;&nbsp;{"⚛️✨"}</p></div></Bounce>
                <div id="home-container" style={{marginTop: 8 + '%'}}>
                    <Bounce top>
                        <div style={{width: 100 + '%', display: 'inline-block'}}>
                            <h1 className="titles">BRANDON DAVID</h1>
                        </div>
                    </Bounce>
                    <Bounce right delay={100}>
                    <div style={{width: 100 + '%', display: 'inline-block'}}>
                        <h2 className="blurbs">
                            Aspiring <a className="orange">developer</a> and <a className="orange">designer.</a><br/>
                            Rising third-year at UC Berkeley.<br/>
                            Electrical Engineering and Computer Science. <br/>
                        </h2>
                    </div>
                    </Bounce>
                </div>
                <div>
                    <Bounce right delay={200}>
                    <Link to="/portfolio">
                        <h2 ref='pastworks' className="blurbs">
                            <div className="action-link"><a className="pastworks clickable">Check out some of my past works.</a></div>
                        </h2>
                    </Link>
                    </Bounce>
                </div>
            </div>
        );
    }
}

export default Home;
