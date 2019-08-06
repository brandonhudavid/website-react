import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Home.css';
import logo from './img/logo.png';
import { BrowserRouter as Route, Link } from "react-router-dom";

export class Innod extends React.Component {

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
                        Every semester, Innovative Design—the premier creative agency at UC Berkeley—hosts the Introduction to Photoshop and Illustrator class, one of the most popular student-led classes at UC Berkeley that receives hundreds of applicants per semester. The class teaches beginners how to use Photoshop and Illustrator as well as apply basic design principles.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        <div>
                        Curriculum
                        </div>
                    </subtitle>
                    <p className="writeup">
                        In the fall of 2018, I led a weekly 2-hour section of 30 students with little to no prior experience in digital design. The curriculum focuses on learning Illustrator for more than half of the semester, and then transitions into exploring Photoshop techniques. Students are given weekly homework assignments that allow them to apply the skills they learned in section. They also have midterm and final assignments, allowing them to display the culmination of what they learned about Illustrator and Photoshop throughout the semester.
                    </p>
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

export default Innod;