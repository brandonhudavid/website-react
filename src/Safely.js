import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Home.css';
import deck from './img/safely/BrandonDavid_HERE-Safely.pdf'
import prev1 from './img/safely/here-preview1.png'
import prev2 from './img/safely/here-preview2.png'
import prev3 from './img/safely/here-preview3.png'
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
                    <Link to={process.env.PUBLIC_URL + "/"}>
                        <a id="logo"><img className="unselected clickable" src={logo}/></a>
                    </Link>
                    <nav>
                        <Link to={process.env.PUBLIC_URL + "/about"}>
                            <a className={"unselected clickable"}>About</a>
                        </Link>
                        <Link to={process.env.PUBLIC_URL + "/portfolio"}>
                            <a className={"selected clickable"}>Portfolio</a>
                        </Link>
                    </nav>
                </header>
                <Bounce top><h1>Safely</h1></Bounce>
                <Bounce left delay={50}>
                    <p>Using HERE's iOS SDK ensure pedestrian safely.<br/>
                    Product design and iOS development with the Berkeley Design Office.</p>
                </Bounce>
                <Bounce left delay={100}>
                    <p className="scope">
                        <b>SCOPE:</b> collaborative intern project<br/>
                        <b>TIME:</b> 2 months<br/>
                        <b>ROLE:</b> product designer, iOS developer<br/>
                        <br/>
                        <b>deck:</b> <a className="here" href={deck} target="_blank">click here</a><br/>
                        <b>article:</b> <a className="here" href="https://developer.here.com/blog/safely-route-college-students-using-the-here-ios-sdk" target="_blank">click here</a>
                    </p>
                </Bounce>
                <Bounce right delay={150}>
                    <subtitle className="background">
                        <div style={{display: "inline-block"}}>
                        Background
                        </div>
                    </subtitle>
                    <p className="background bg-writeup">
                        During my summer internship at the HERE Berkeley office, I had the opportunity to work with <a href="https://vanasaliu.myportfolio.com/" className="here" target="_blank">Vanasa Liu</a>—a product design intern—and the Berkeley Design Office on a location based side project that utilizes HERE's location technology.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Near the HERE Berkeley Office
                    </subtitle>
                    <p className="writeup">
                        Vanasa and I discovered a problem that has an effect on people right outside our office and all around the world: <here>getting to your destination safely.</here> In the summer of 2018, the city of Berkeley's Crime Index Ranking was #4, meaning that Berkeley was only safer than 4% of all U.S. cities. These safety concerns extend to cities around the world, affecting everyone from college students to full-time employees.
                    </p>
                    <p className="writeup">
                        Thus, Vanasa and I worked on a solution to address this issue. We took our concept from ideation through product design and multiple iterations. And with HERE's extensive location database and readily available APIs, we took this concept all the way to a functional prototype that routes users to their destinations safely. Read more about our process by checking out our <a className="here" href={deck} target="_blank">presentation deck</a> or viewing my <a className="here" href="https://developer.here.com/blog/safely-route-college-students-using-the-here-ios-sdk" target="_blank">published article!</a>
                    </p>
                    <div className="proj-collection" style={{marginBottom: 2 + '%'}}>
                        <img className="proj-img40 proj-shadow" src={prev1}/>
                    </div>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={prev2}/>
                        <img className="proj-img40 proj-shadow" src={prev3}/>
                    </div>
                </Bounce>
                <Link to={process.env.PUBLIC_URL + "/portfolio"}>
                    <h2 ref='pastworks' className="blurbs">
                        <div class="action-link"><a class="pastworks clickable">Back to my portfolio.</a></div>
                    </h2>
                </Link>
            </div>
        );
    }
}

export default Habbit;