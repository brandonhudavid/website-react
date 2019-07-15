import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Home.css';
import sketch from './img/akp/akp-sketch.jpg'
import flyer1 from './img/akp/akp-flyer1.png'
import flyer2 from './img/akp/akp-flyer2.png'
import flyer3 from './img/akp/akp-flyer3.png'
import final from './img/akp/akp-flyer-final.jpg'
import cover from './img/akp/akp-cover.jpg'
import logo from './img/logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Akp extends React.Component {

    constructor(props) {
        super(props); 
    }

    componentWillMount() {
        window.scrollTo(0,0);
    }

    componentWillUpdate() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <header>
                    <Link to="/">
                        <a id="logo"><img className="unselected clickable" src={logo}/></a>
                    </Link>
                    <nav>
                        <Link to="/about">
                            <a className={"selected clickable"}>About</a>
                        </Link>
                        <Link to="/portfolio">
                            <a className={"unselected clickable"}>Portfolio</a>
                        </Link>
                    </nav>
                </header>
                <Bounce top><h1>Alpha Kappa Psi TechTalks</h1></Bounce>
                <Bounce left delay={50}><p>A professional event connecting industry leaders with UC Berkeley students.</p></Bounce>
                <Bounce left delay={100}>
                    <p className="scope">
                        <b>SCOPE:</b> conference at UC Berkeley<br/>
                        <b>TIME:</b> 1 month<br/>
                        <b>ROLE:</b> marketing designer<br/>
                    </p>
                </Bounce>
                <Bounce right delay={150}>
                    <subtitle className="background">
                        Background
                    </subtitle>
                    <p className="background bg-writeup">
                        Alpha Kappa Psi is a professional business fraternity, and UC Berkeley's chapter hosts annual professional events on campus. In the spring of 2019, I worked on creating marketing materials for the event.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Empowering social change.
                    </subtitle>
                    <p className="writeup">
                        For this year's event, AKP wanted a theme focused around empowering people to create social change. I sketched three initial ideas with concepts ranging from green tech to globalization.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={sketch}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Iterations.
                    </subtitle>
                    <p className="writeup">
                        I then worked on three high-fidelity design concepts, each with two different colorways.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img30 proj-shadow" src={flyer1}/>
                        <img className="proj-img30 proj-shadow" src={flyer2}/>
                        <img className="proj-img30 proj-shadow" src={flyer3}/>
                    </div>
                    <p className="writeup">
                        These designs had heavy inspiration for the appearance of the finalized flyers, cover photo, and other marketing materials.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={final}/>
                        <img className="proj-img40 proj-shadow" src={cover}/>
                    </div>
                </Bounce>
                <Link to="/portfolio">
                    <h2 ref='pastworks' className="blurbs">
                        <div class="action-link"><a class="pastworks clickable">Back to my portfolio.</a></div>
                    </h2>
                </Link>
            </div>
        );
    }
}

export default Akp;