import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Home.css';
import logo from './img/logo.png';
import okr1 from './img/optimizely/okr1.png'
import okr2 from './img/optimizely/okr2.png'
import opti1 from './img/optimizely/opti1.jpg'
import opti2 from './img/optimizely/opti2.jpg'
import { BrowserRouter as Route, Link } from "react-router-dom";

export class Optimizely extends React.Component {

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
                        <Link to={process.env.PUBLIC_URL + "/art"}>
                            <a className={"unselected clickable"}>Art&amp;Design</a>
                        </Link>
                    </nav>
                </header>
                <Bounce top><h1>Optimizely</h1></Bounce>
                <Bounce left delay={50}>
                    <p>Software Engineer intern for Optimizely's Developer Experience team.<br/>
                    Working on idiomatic methods for Optimizely's Fullstack SDKs.<br/></p>
                </Bounce>
                <Bounce left delay={100}>
                    <p className="scope">
                        <b>SCOPE:</b> Developing in Full Stack SDKs<br/>
                        <b>TIME:</b> 3 months<br/>
                        <b>ROLE:</b> software engineer intern<br/>
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
                        <a className="optimizely" href="https://www.optimizely.com" target="_blank">Optimizely</a> is a company that provides A/B testing technologies for other companies, including 24 companies of the Fortune 100. One of Optimizely's main products is <a className="optimizely" href="https://www.optimizely.com/platform/full-stack/" target="_blank">Full Stack,</a> which allows product teams to implement A/B testing and feature flags for their products.<br/><br/>
                        In the summer of 2019, I was a software engineer for Optimizely's Developer Experience team. I created design documents and implemented idiomatic methods within the JavaScript, Python, and Ruby SDKs for the Full Stack product. I also implemented frontend changes in Optimizely's customer-facing React web application to help new Full Stack users better utilize the SDKs.
                    </p>
                    </div>
                </Bounce>

                <Bounce right delay={200}>
                    <subtitle className="background">
                        Reflections
                    </subtitle>
                    <div className="right-wrapper">
                        <p className="background bg-writeup">
                            Optimizely's internship program changed the way that I view software engineering internships and full-time roles. In my first few years of college, I had the expectation that software engineering internships would be all about tackling difficult problems and implementing algorithmic solutions. While such problems may be taken on by senior engineers, I have learned that there is a larger emphasis on team communication, whether those conversations be about API design or implementation details.
                        </p>
                    </div>
                </Bounce>
                <Bounce right delay={200}>
                    <subtitle className="background">
                        NDA
                    </subtitle>
                    <div className="right-wrapper">
                        <p className="background bg-writeup">
                        Due to non-disclosure agreements I cannot share most of my work, but here is a snippet of the slides I presented at my team's OKR, which explains the need for implementing idiomatic methods in our dynamically-typed SDKs.
                        </p>
                    </div>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={okr1}/>
                        <img className="proj-img40 proj-shadow" src={okr2}/>
                    </div>
                </Bounce>
                <Bounce right delay={200}>
                    <subtitle className="background">
                        Acknowledgments
                    </subtitle>
                    <div className="right-wrapper">
                        <p className="background bg-writeup">
                            Thank you, Optimizely, for this amazing learning opportunity and for tons of new friendships. Shout out to Optimizely's DevX team, and especially to <a className="optimizely" href="https://www.linkedin.com/in/mikeng13/" target="_blank">Mike Ng</a> for his mentorship and words of advice. And thank you to my fellow interns, <a className="optimizely" href="https://www.linkedin.com/in/quocanh261997/" target="_blank">Mike Nguyen,</a> <a className="optimizely" href="https://www.linkedin.com/in/tiana-nguyen/" target="_blank">Tiana Nguyen,</a> <a className="optimizely" href="https://www.linkedin.com/in/harshita-kaushal/" target="_blank">Harshita Kaushal,</a> <a className="optimizely" href="https://www.linkedin.com/in/jyuanchen/" target="_blank">Jerry Chen,</a> <a className="optimizely" href="https://www.linkedin.com/in/hannah-brinkley-41b935172/" target="_blank">Hannah Brinkley,</a> and <a className="optimizely" href="https://www.linkedin.com/in/jahnavi-bantupalli-2207/" target="_blank">Jahnavi Bantupalli,</a> for making this such an awesome summer.
                        </p>
                    </div>
                    <div className="proj-collection">
                        <img className="proj-img20 proj-shadow" src={opti1}/>
                        <img className="proj-img40 proj-shadow" src={opti2}/>
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

export default Optimizely;
