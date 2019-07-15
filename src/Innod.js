import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Home.css';
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
                <Bounce top><h1>Introduction to Photoshop and Illustrator Instructor</h1></Bounce>
                <Bounce left delay={50}><p>Teaching a weekly class of 30 students with no prior experience in digital design.</p></Bounce>
                <Bounce left delay={100}>
                    <p className="scope">
                        <b>SCOPE:</b> weekly class of 30 students<br/>
                        <b>TIME:</b> 5 months<br/>
                        <b>ROLE:</b> lead instructor<br/>
                        <br/>
                        <b>website:</b> <a target="_blank" className="innod" href="https://innovativedesign.club/decals">click here</a>
                    </p>
                </Bounce>
                <Bounce right delay={150}>
                    <subtitle className="background">
                        <div>
                        Background
                        </div>
                    </subtitle>
                    <p className="background bg-writeup">
                        Every semester, Innovative Design—the premier creative agency at UC Berkeley—hosts the Introduction to Photoshop and Illustrator class, one of the most popular student-led classes at UC Berkeley that receives hundreds of applicants per semester. The class teaches beginners how to use Photoshop and Illustrator as well as apply basic design principles. In the fall of 2018, I had the privilege of leading a class of 30 students that involved in-class lectures, tutorials, and weekly homeworks.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        <div>
                        More Stuff
                        </div>
                    </subtitle>
                    <p className="writeup">
                        Lorem ipsum eat some dimsum. Lorem ipsum eat some dimsum. Lorem ipsum eat some dimsum. Lorem ipsum eat some dimsum. Lorem ipsum eat some dimsum. Lorem ipsum eat some dimsum. Lorem ipsum eat some dimsum. Lorem ipsum eat some dimsum. Lorem ipsum eat some dimsum. 
                    </p>
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