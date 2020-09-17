import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Home.css';
import logo from './img/logo.png';
import chantal from './img/innod/chantal-herrera.jpg';
import william from './img/innod/william-jiang.jpg';
import tiffany from './img/innod/tiffany-tran.jpg';
import tiffany2 from './img/innod/tiffany-tran2.jpg';
import eva from './img/innod/eva-chi.png';
import bell from './img/innod/bell-wu.jpg';
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
                            <a className={"unselected clickable"}>Portfolio</a>
                        </Link>
                        <Link to={process.env.PUBLIC_URL + "/art"}>
                            <a className={"selected clickable"}>Art&amp;Design</a>
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
                    <div className="right-wrapper">
                        <p className="background bg-writeup">
                            Every semester, Innovative Design—the premier creative agency at UC Berkeley—hosts the Introduction to Photoshop and Illustrator class, one of the most popular student-led classes at UC Berkeley that receives hundreds of applicants per semester. The class teaches beginners how to use Photoshop and Illustrator as well as apply basic design principles.
                        </p>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        <div>
                        Curriculum
                        </div>
                    </subtitle>
                    <p className="writeup">
                        In the fall of 2018, I led a weekly 2-hour section of 30 students with little to no prior experience in digital design. The curriculum focuses on learning Illustrator for more than half of the semester, and then transitions into exploring Photoshop techniques.
                    </p>
                    <p className="writeup">
                        Students are given weekly homework assignments that allow them to apply the skills they learned in section. They also have midterm and final assignments, allowing them to display what they learned about Illustrator and Photoshop throughout the semester.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={chantal}/>
                        <img className="proj-img40 proj-shadow" src={william}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={tiffany}/>
                        <img className="proj-img40 proj-shadow" src={tiffany2}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={eva}/>
                        <img className="proj-img40 proj-shadow" src={bell}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <p className="writeup">
                        Artwork credit to Chantal Herrera, William Jiang, Tiffany Tran, Eva Chi, and Bell Wu.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle className="background">
                        Acknowledgments
                    </subtitle>
                    <div className="right-wrapper">
                        <p className="background bg-writeup">
                            Thank you to Sahil Sanghvi, Valerie Tan, and Julie Wong for being amazing instructors for the other sections. And big thank you to Kiana Aryan for managing all of these classes and training us to become awesome instructors.
                        </p>
                    </div>
                </Bounce>
                <Link to={process.env.PUBLIC_URL + "/art"}>
                    <h2 ref='pastworks' className="blurbs">
                    <div class="action-link"><a class="pastworks clickable">Back to my art and design work.</a></div>
                    </h2>
                </Link>
            </div>
        );
    }
}

export default Innod;