import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Home.css';
import restoration from './img/restoration/restoration-page.jpg'
import logo from './img/logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Bottle extends React.Component {

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
                <Bounce top><h1>Photo Restoration</h1></Bounce>
                <Bounce left delay={50}>
                    <p>A Photo Restoration and Colorization workshop.<br/>
                    Part of Innovative Design's HEX: Hone and Explore, free creative workshops at UC Berkeley.<br/></p>
                </Bounce>
                <Bounce left delay={100}>
                    <p className="scope">
                        <b>SCOPE:</b> teaching workshop<br/>
                        <b>TIME:</b> 1 week<br/>
                        <b>ROLE:</b> lead instructor
                    </p>
                </Bounce>
                <Bounce right delay={150}>
                    <subtitle className="background">
                        Background
                    </subtitle>
                    <p className="background bg-writeup">
                    <a href="https://hex.innovativedesign.club/" className="innod" target="_blank">HEX: Hone and Explore</a> is a bi-annual event hosted by <a href="https://innovativedesign.club/" className="innod" target="_blank">Innovative Design,</a> UC Berkeley's premier creative agency. During HEX, Innovative Design's members prepare free workshops for students interested in learning more about art, design, and other mediums of creativity.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        What is photo restoration?
                    </subtitle>
                    <p className="writeup">
                        Photo restoration is the process of digitally restoring the appearance of a physical photograph that may be damaged by natural causes. Restoration has numerous real life applications, from bringing historical photographs to life, to recovering old family photos.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Process
                    </subtitle>
                    <p className="writeup">
                        At HEX Spring 2018, I led a workshop on the essentials to photo restoration and colorization using Adobe Photoshop. <a href="https://docs.google.com/presentation/d/1zNfGbEezYwzNiAp7bKwGj5etUDyJudd31-e89h7FN40/edit?usp=sharing" className="innod" target="_blank">Click here to view my presentation slides.</a>
                    </p>
                    <div className="proj-collection">
                        <div style={{display: "inline-block"}}>
                            <img data-sr="enter bottom move 50px wait 0.2s" className="proj-photo proj-shadow" src={restoration}/>
                        </div>
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

export default Bottle;