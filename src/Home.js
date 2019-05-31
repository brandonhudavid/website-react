import React from 'react';
import logo from './img/logo.png';
import './Home.css';
import sr from './ScrollReveal'

export class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        const config = {
          origin: 'right',
          duration: 500,
          delay: 100,
          distance: '50px',
          scale: 1,
          easing: 'ease',
        }
        sr.reveal(this.refs.i, config)
        const config2 = {
            origin: 'right',
            duration: 500,
            delay: 200,
            distance: '50px',
            scale: 1,
            easing: 'ease',
          }
          sr.reveal(this.refs.ii, config2)
          const config3 = {
            origin: 'right',
            duration: 500,
            delay: 300,
            distance: '50px',
            scale: 1,
            easing: 'ease',
          }
          sr.reveal(this.refs.iii, config3)
          const config4 = {
            origin: 'right',
            duration: 500,
            delay: 500,
            distance: '50px',
            scale: 1,
            easing: 'ease',
          }
          sr.reveal(this.refs.iv, config4)
      }

    render(){
        return (
            <div>
                <div ref="iv" className="react"><p><i>{"< /> with React"}</i>&nbsp;&nbsp;{"⚛️✨"}</p></div>
                <div id="home-container" style={{marginTop: 8 + '%'}}>
                    <h1 ref='i' className="titles"><a className="clickable">BRANDON DAVID</a></h1>
                    <h2 ref='ii' className="blurbs">
                        Aspiring <a className="orange">developer</a> and <a className="orange">designer.</a><br/>
                        Rising third-year at UC Berkeley.<br/>
                        Electrical Engineering and Computer Science. <br/>
                    </h2>
                </div>
            </div>
        );
    }
}

export default Home;
