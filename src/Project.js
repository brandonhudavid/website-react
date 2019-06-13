import React from 'react';
import ford from './img/ford/ford.png';
import engage from './img/engage/engage.png'
import here from './img/here/here.png'
import habbit from './img/habbit/habbit.png'
import hira from './img/hira/hira.png'
import bottle from './img/bottle/bottle.png'
import innod from './img/innod/innod.png'
import restoration from './img/innod/restoration.png'
import bdla from './img/bdla/bdla.png'
import whitney from './img/whitney/whitney.png'
import akp from './img/akp/akp.png'
import './Portfolio.css'
import sr from './ScrollReveal'

export class Project extends React.Component {

    componentDidMount = () => {
        const config = {
          origin: 'bottom',
          duration: 500,
          delay: 200,
          distance: '50px',
          scale: 1,
          easing: 'ease',
        }
        sr.reveal(this.refs.left, config)
        const config2 = {
            origin: 'bottom',
            duration: 500,
            delay: 200,
            distance: '50px',
            scale: 1,
            easing: 'ease',
        }
        sr.reveal(this.refs.right, config2)
    }

    projImage(id) {
        switch(id) {
            case "ford":
                return ford;
            case "engage":
                return engage;
            case "here":
                return here;
            case "habbit":
                return habbit;
            case "hira":
                return hira;
            case "bottle":
                return bottle;
            case "innod":
                return innod;
            case "restoration":
                return restoration;
            case "bdla":
                return bdla;
            case "whitney":
                return whitney;
            case "akp":
                return akp;
            default:
                return;
        }
    }

    render() {
        return (
            <a href="habbit.html">
                <div ref={this.props.index % 2 == 0 ? "left" : "right"} class={this.props.index % 2 == 0 ? "proj-panel left" : "proj-panel right"}>
                    <img src={this.projImage(this.props.id)} class="proj-panel-image shadow" />
                    <div id={this.props.id} class="overlay">
                        <div class="proj-text">
                            <div class="date-overlay">{this.props.date}</div>
                            {this.props.name}
                            <div class="text-overlay">{this.props.description}</div>
                            <div class="subtext-overlay">{this.props.tags.join(", ")}</div>
                        </div>
                    </div>
                </div>
            </a>

        );
    }

}

export default Project;
