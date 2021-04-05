import React from 'react';
import Bounce from 'react-reveal/Bounce';
import logo from './img/logo.png';
import brandon from './img/brandonhudavid.png';
import linkedin from './img/linkedin-logo.png'
import github from './img/github-logo.png'
import resume from './img/BrandonDavid_Resume.pdf'
import './About.css';
import { BrowserRouter as Route, Link } from "react-router-dom";

export class About extends React.Component {

    render(){
        return (
            <div>
                <header>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                        <a id="logo"><img className="unselected clickable" src={logo}/></a>
                    </Link>
                    <nav>
                        <Link to={process.env.PUBLIC_URL + "/about"}>
                            <a className={"selected clickable"}>About</a>
                        </Link>
                        <Link to={process.env.PUBLIC_URL + "/portfolio"}>
                            <a className={"unselected clickable"}>Portfolio</a>
                        </Link>
                        <Link to={process.env.PUBLIC_URL + "/art"}>
                            <a className={"unselected clickable"}>Art&amp;Design</a>
                        </Link>
                    </nav>
                </header>
                <div style={{display: "inline-block"}}>
                    <Bounce top delay={100}>
                        <div ref="v" className="brandon">
                            <img src={brandon} alt="Brandon David" />
                        </div>
                    </Bounce>
                    <div id="about-container">
                        <div>
                        <Bounce top><h1 ref="i" className="titles" style={{marginTop: 'auto'}}>Hi there!</h1></Bounce>
                        <Bounce right delay={100}>
                            <p ref="ii" className="blurbs">
                                I'm Brandon David, a Fall 2020 graduate of UC Berkeley with a Bachelor's in <a className="berkeley" href="https://eecs.berkeley.edu/" target="_blank">Electrical Engineering and Computer Science (EECS).</a> I currently work for <a className="adobe" href="https://www.adobe.com/" target="_blank">Adobe</a> as a Web Optimization and Personalization Developer. 
                            </p>
                        </Bounce>
                        </div>
                        <div>
                            <Bounce right delay={200}>
                            <p ref="iii" className="blurbs">
                                I previously interned as a software engineer for <a className="optimizely" href="https://www.optimizely.com/" target="_blank">Optimizely</a> and a research engineer for <a className="here" href="https://www.here.com/" target="_blank">HERE Technologies.</a> I have also been a web developer for <a className="innod" href="https://innovativedesign.club/" target="_blank">Innovative Design,</a> UC Berkeley's premier creative agency.
                            </p>
                            </Bounce>
                        </div>
                        <div>
                            <Bounce right delay={250}>
                            <p ref="iii" className="blurbs">
                                For business inquiries, feel free to reach out to me at <a style={{color:'#f37120',fontWeight:700}}>brandonhudavid@gmail.com</a> :)
                            </p>
                            </Bounce>
                        </div>
                    </div>
                </div>
                <div>
                <Bounce left delay={300}>
                    <div className="social">
                        <a href="https://linkedin.com/in/brandonhudavid" target="_blank"><img ref="vi" src={linkedin} /></a>
                        <a href="https://github.com/brandonhudavid" target="_blank"><img ref="vi" src={github} /></a>
                    </div>
                </Bounce>
                <Bounce right delay={300}>
                    <a href={resume} target="_blank">
                        <h2 ref="iv" className="resume action-link clickable">Click here for my resume.</h2>
                    </a>
                </Bounce>
            </div>
            {/* <Bounce left delay={400}>
                <div className="contact">
                    <p>
                        Interested in working together?<br/>
                        Feel free to email me at <a className="orange">brandonhudavid@berkeley.edu</a> :)
                    </p>
                </div>
            </Bounce> */}
            </div>
        );
    }
}
export default About;
