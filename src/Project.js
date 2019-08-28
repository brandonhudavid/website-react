import React from 'react';
import ford from './img/ford/ford.png';
import engage from './img/engage/engage.png'
import here from './img/here/here.png'
import safely from './img/safely/safely.png'
import habbit from './img/habbit/habbit.png'
import hira from './img/hira/hira.png'
import bottle from './img/bottle/bottle.png'
import innod from './img/innod/innod.png'
import restoration from './img/innod/restoration.png'
import bdla from './img/bdla/bdla.png'
import whitney from './img/whitney/whitney.png'
import akp from './img/akp/akp.png'
import optimizely from './img/optimizely/optimizely.png'
import './Portfolio.css'

export class Project extends React.Component {

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
            case "safely":
                return safely;
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
            case "optimizely":
                return optimizely;
            default:
                return;
        }
    }

    render() {
        return (
            <a>
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
