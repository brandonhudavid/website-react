import React from 'react';
import Bounce from 'react-reveal/Bounce';
import logo from './img/logo.png';
import './Home.css';
import sr from './ScrollReveal'


export class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <Bounce right delay={400}><div className="react"><p><i>{"< /> with React. v1.0b"}</i>&nbsp;&nbsp;{"⚛️✨"}</p></div></Bounce>
                <div id="home-container" style={{marginTop: 8 + '%'}}>
                    <Bounce right>
                        <div style={{width: 100 + '%', display: 'inline-block'}}>
                            <h1 className="titles"><a className="clickable">BRANDON DAVID</a></h1>
                        </div>
                    </Bounce>
                    <Bounce right delay={100}>
                    <div style={{width: 100 + '%', display: 'inline-block'}}>
                        <h2 className="blurbs">
                            Aspiring <a className="orange">developer</a> and <a className="orange">designer.</a><br/>
                            Rising third-year at UC Berkeley.<br/>
                            Electrical Engineering and Computer Science. <br/>
                        </h2>
                    </div>
                    </Bounce>
                </div>
            </div>
        );
    }
}

export default Home;
