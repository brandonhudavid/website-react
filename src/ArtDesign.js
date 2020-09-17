import React from 'react';
import './Portfolio.css';
import FolioData from "./FolioData"
import Project from "./Project"
import logo from './img/logo.png';
import Bounce from 'react-reveal/Bounce';
import swe_on from "./img/swe-on.png"
import product_on from "./img/product-on.png"
import graphic_on from "./img/graphic-on.png"
import swe_off from "./img/swe-off.png"
import product_off from "./img/product-off.png"
import graphic_off from "./img/graphic-off.png"
import { BrowserRouter as Route, Link } from "react-router-dom";

export class ArtDesign extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sweFilter: true,
            productFilter: false,
            graphicFilter: false,
            filters: ["artFilter"]
        }
    }

    componentWillMount() {
        window.scrollTo(0,0);
    }

    componentWillUpdate() {
        window.scrollTo(0,0);
    }

    filterProjects() {
        let proj = [];
        for (var i=0; i < FolioData.projects.length; i++) {
            // var valid = true;
            let filters = FolioData.projects[i].filters;
            // console.log("current filters:", this.state.filters)
            for (var j=0; j < this.state.filters.length; j++) {
                if (filters.includes(this.state.filters[j])) {
                    proj = proj.concat([FolioData.projects[i]])
                    break;
                }
            }
        }
        return proj;
    }

    bounceDirection(project, index) {
        if (index == 0) {
            return (
                <Link to={process.env.PUBLIC_URL + "/" + project.id}>
                    <Bounce up>
                        <div key={project.id} className="clickable">
                            <Project key={project.id} id={project.id} name={project.name} description={project.description} date={project.date} tags={project.tags} index={index} />
                        </div>
                    </Bounce>
                </Link>
            )
        }
        if (index == 1) {
            return (
                <Link to={process.env.PUBLIC_URL + "/" + project.id}>
                    <Bounce right delay={100}>
                        <div key={project.id} className="clickable">
                            <Project key={project.id} id={project.id} name={project.name} description={project.description} date={project.date} tags={project.tags} index={index} />
                        </div>
                    </Bounce>
                </Link>
            )
        }
        if (index % 2 == 0) {
            return (
                <Link to={process.env.PUBLIC_URL + "/" + project.id}>
                    <Bounce left delay={200}>
                        <div key={project.id} className="clickable">
                            <Project key={project.id} id={project.id} name={project.name} description={project.description} date={project.date} tags={project.tags} index={index} />
                        </div>
                    </Bounce>
                </Link>
            )
        }
        return (
            <Link to={process.env.PUBLIC_URL + "/" + project.id}>
                <Bounce right delay={250}>
                    <div key={project.id} className="clickable">
                        <Project key={project.id} id={project.id} name={project.name} description={project.description} date={project.date} tags={project.tags} index={index} />
                    </div>
                </Bounce>
            </Link>
        )
    }

    render(){
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

                <div>
                    <Bounce top>
                        <div>
                            <h1 ref='buttons' class="titles" style={{marginTop: 'auto'}}>Art&amp;Design</h1>
                        </div>
                        <div><div ref='pastworks' className="filter" style={{display: 'inline-block'}}><h3>Click on the images below to view my art and design work.</h3></div></div>
                    </Bounce>
                </div>
                <Bounce right><hr style={{height:'4px', borderWidth:0, color:'#f37120', backgroundColor:'#f37120'}}></hr><br></br></Bounce>
                <div id="container">
                    <div style={{display: "block"}}>
                        {this.filterProjects().map((project, index) =>
                            this.bounceDirection(project, index)
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default ArtDesign;