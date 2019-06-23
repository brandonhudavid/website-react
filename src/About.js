import React from 'react';
import Bounce from 'react-reveal/Bounce';
import logo from './img/logo.png';
import brandon from './img/brandonhudavid.png';
import linkedin from './img/linkedin-logo.png'
import github from './img/github-logo.png'
import resume from './img/BrandonDavid_Resume.pdf'
import './About.css';
import sr from './ScrollReveal'

export class About extends React.Component {

    // componentDidMount = () => {
    //     const config = {
    //       origin: 'right',
    //       duration: 500,
    //       delay: 100,
    //       distance: '50px',
    //       scale: 1,
    //       easing: 'ease',
    //     }
    //     sr.reveal(this.refs.i, config)
    //     const config2 = {
    //         origin: 'right',
    //         duration: 500,
    //         delay: 200,
    //         distance: '50px',
    //         scale: 1,
    //         easing: 'ease',
    //       }
    //       sr.reveal(this.refs.ii, config2)
    //       const config3 = {
    //         origin: 'right',
    //         duration: 500,
    //         delay: 300,
    //         distance: '50px',
    //         scale: 1,
    //         easing: 'ease',
    //       }
    //       sr.reveal(this.refs.iii, config3)
    //       const config4 = {
    //         origin: 'right',
    //         duration: 500,
    //         delay: 400,
    //         distance: '50px',
    //         scale: 1,
    //         easing: 'ease',
    //       }
    //       sr.reveal(this.refs.iv, config4)
    //       const config5 = {
    //         origin: 'left',
    //         duration: 500,
    //         delay: 200,
    //         distance: '50px',
    //         scale: 1,
    //         easing: 'ease',
    //       }
    //       sr.reveal(this.refs.v, config5)
    //       const config6 = {
    //         origin: 'left',
    //         duration: 500,
    //         delay: 400,
    //         distance: '50px',
    //         scale: 1,
    //         easing: 'ease',
    //       }
    //       sr.reveal(this.refs.vi, config6)
    // }

    render(){
        return (
            <div>
                <div style={{display: "inline-block"}}>
                    <Bounce top delay={100}>
                        <div ref="v" className="brandon">
                            <img src={brandon} />
                        </div>
                    </Bounce>
                    <div id="about-container">
                        <div>
                        <Bounce top><h1 ref="i" className="titles" style={{marginTop: 'auto'}}>Hi there!</h1></Bounce>
                        <Bounce right delay={100}>
                            <p ref="ii" className="blurbs">
                                My name is Brandon David. I am a rising third-year studying <a className="berkeley" href="https://eecs.berkeley.edu/" target="_blank">Electrical Engineering and Computer Science</a> at UC Berkeley.
                                This summer, I am working in San Francisco as a software engineering intern for <a className="optimizely" href="https://www.optimizely.com/" target="_blank">Optimizely,</a> the world's leading product experimentation platform. I have previously interned as a research engineer at <a className="here" href="https://www.here.com/" target="_blank">HERE Technologies.</a>
                            </p>
                        </Bounce>
                        </div>
                        <div>
                            <Bounce right delay={200}>
                            <p ref="iii" className="blurbs">
                                I am an iOS developer for <a className="mdb" href="https://mdb.dev/" target="_blank">Mobile Developers of Berkeley,</a> UC Berkeley's pre-incubator for businesses and mobile applications, and a student instructor for <a className="innod" href="https://innovativedesign.club/decals/" target="_blank">Intro to Photoshop and Illustrator,</a> one of UC Berkeley's most popular student-led classes, hosted by <a className="innod" href="https://innovativedesign.club/" target="_blank">Innovative Design.</a>
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
                    <a href={resume} target="_blank">
                    <Bounce right delay={300}>
                        <h2 ref="iv" className="blurbs action-link clickable">Click here for my resume.</h2>
                    </Bounce>
                    </a>
            </div>
            <Bounce left delay={400}>
                <div ref="vi" style={{float: 'left'}}>
                    <p>
                        Interested in working together?<br/>
                        Feel free to email me at <a className="orange">brandonhudavid@berkeley.edu</a> :)
                    </p>
                </div>
            </Bounce>
            </div>
        );
    }
}
export default About;