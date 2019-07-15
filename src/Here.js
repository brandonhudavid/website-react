import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Home.css';
import deck1 from './img/here/here-deck1.png'
import deck2 from './img/here/here-deck2.png'


import tracker1 from './img/habbit/habbit-tracker1.jpg'
import tracker2 from './img/habbit/habbit-tracker2.jpg'
import tracker3 from './img/habbit/habbit-tracker3.jpg'
import logo1 from './img/habbit/habbit-logo1.png'
import colors from './img/habbit/habbit-colors.png'
import logo2 from './img/habbit/habbit-logo2.png'
import wireframe from './img/habbit/habbit-wireframe.png'
import backend from './img/habbit/habbit-backend.png'
import gif1 from './img/habbit/habbit-tutorial.gif'
import gif2 from './img/habbit/habbit-perform.gif'
import gif3 from './img/habbit/habbit-tracker.gif'
import photo from './img/habbit/habbit-photo.JPG'
import logo from './img/logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Habbit extends React.Component {

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
                <Bounce top><h1>HERE Technologies</h1></Bounce>
                <Bounce left delay={50}>
                    <p>Research engineer intern for HERE's Highly Automated Driving Team.<br/>
                    Probability and uncertainty modeling for visualized road features.<br/></p>
                </Bounce>
                <Bounce left delay={100}>
                    <p className="scope">
                        <b>SCOPE:</b> Modeling for Highly Automated Driving pipeline<br/>
                        <b>TIME:</b> 3 months<br/>
                        <b>ROLE:</b> research engineer intern<br/>
                    </p>
                </Bounce>
                <Bounce right delay={150}>
                    <subtitle className="background">
                        <div>
                            Background
                        </div>
                    </subtitle>
                    <p className="background bg-writeup">
                        <a className="here" href="http://here.com" target="_blank">HERE Technologies</a> is a Netherlands-based company that provides mapping and location data in order to help other companies and individuals harness the power of location. Since 2018, they are <a className="here" href="https://360.here.com/among-google-apple-mapbox-and-others-here-is-now-1-in-location-platforms" target="_blank">ranked #1</a> in location platform providers, above major competitors like Google, Apple, and MapBox. In the summer of 2018, I was a research engineer intern for HERE's Highly Automated Driving Team, with a focus on modeling road features visualized by autonomous cars.
                    </p>
                </Bounce>

                <Bounce right delay={200}>
                    <subtitle className="background">
                        <div>
                            Reflections
                        </div>
                    </subtitle>
                    <p className="background bg-writeup">
                        Overall, interning at HERE was a great learning opportunity! As my first undergraduate internship, I was introduced to the concept of Scrum as a framework for project management since my team would have daily Scrum meetings and manage their tasks on Jira boards.<br/><br/>
                        I also realized how settling into a new team requires patience. In my first few days at HERE, I was intimidated by the huge codebase of files, not even knowing which scripts I would be working with. However, after the first week, I found myself gradually understanding parts of the codebase and asking my team members to help fill any gaps of knowledge.
                    </p>
                </Bounce>
                <Bounce right delay={200}>
                    <subtitle>
                        <div>
                            NDA
                        </div>
                    </subtitle>
                    <p className="writeup">
                    Due to non-disclosure agreements I cannot share most of my work, but here is a snippet of my intern report, which includes a runtime improvement of 95% in one of our team's key modeling algorithms.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={deck1}/>
                        <img className="proj-img40 proj-shadow" src={deck2}/>
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

export default Habbit;