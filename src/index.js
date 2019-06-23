import React from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import Home from './Home';
import About from "./About";
// import Portfolio from "./Portfolio";
import FolioData from "./FolioData"
import Project from "./Project"
import Habbit from "./Habbit"
import Bottle from "./Bottle"
import Restoration from "./Restoration"
import Hira from "./Hira"
import Here from "./Here"
import Safely from "./Safely"
import Innod from "./Innod"
import Engage from "./Engage"
import Ford from "./Ford"
import Akp from "./Akp"
import logo from './img/logo.png';
import sr from './ScrollReveal'
import swe_on from "./img/swe-on.png"
import ios_on from "./img/ios-on.png"
import product_on from "./img/product-on.png"
import graphic_on from "./img/graphic-on.png"
import swe_off from "./img/swe-off.png"
import ios_off from "./img/ios-off.png"
import product_off from "./img/product-off.png"
import graphic_off from "./img/graphic-off.png"
import Bounce from 'react-reveal/Bounce';

class Portfolio extends React.Component {

    filterProjects() {
        let proj = [];
        for (var i=0; i < FolioData.projects.length; i++) {
            var valid = true;
            let filters = FolioData.projects[i].filters;
            for (var j=0; j < this.props.filters.length; j++) {
                if (!filters.includes(this.props.filters[j])) {
                    valid = false;
                    console.log("invalid", "proj filters: ", filters, "props needed: ", this.props.filters);
                    break;
                }
            }
            if (valid) {
                console.log("valid: ", FolioData.projects[i].name);
                proj = proj.concat([FolioData.projects[i]])
            }
        }
        console.log("all valid projs:");
        for (var i=0; i < proj.length; i++) {
            console.log(proj.name);
        }
        return proj;
    }

    bounceDirection(project, index) {
        if (index == 0) {
            return (
                <Bounce left>
                    <div key={project.id} className="clickable" onClick={() => this.props.fn(project.id)}>
                        <Project key={project.id} id={project.id} name={project.name} description={project.description} date={project.date} tags={project.tags} index={index} />
                    </div>
                </Bounce>
            )
        }
        if (index == 1) {
            return (
                <Bounce right delay={100}>
                    <div key={project.id} className="clickable" onClick={() => this.props.fn(project.id)}>
                        <Project key={project.id} id={project.id} name={project.name} description={project.description} date={project.date} tags={project.tags} index={index} />
                    </div>
                </Bounce>
            )
        }
        if (index % 2 == 0) {
            return (
                <Bounce left delay={200}>
                    <div key={project.id} className="clickable" onClick={() => this.props.fn(project.id)}>
                        <Project key={project.id} id={project.id} name={project.name} description={project.description} date={project.date} tags={project.tags} index={index} />
                    </div>
                </Bounce>
            )
        }
        return (
            <Bounce right delay={250}>
                <div key={project.id} className="clickable" onClick={() => this.props.fn(project.id)}>
                    <Project key={project.id} id={project.id} name={project.name} description={project.description} date={project.date} tags={project.tags} index={index} />
                </div>
            </Bounce>
        )
    }

    render(){
        return (
            <div>
                <div id="container">
                    <div>
                        {this.filterProjects().map((project, index) =>
                            this.bounceDirection(project, index)
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Home",
            home: true,
            about: false,
            folio: false,
            project: "",
            sweFilter: false,
            iosFilter: false,
            productFilter: false,
            graphicFilter: false,
            filters: []
        }
    }    

    isHome() {
        if (this.state.home) {
            return {opacity: 1};
        }
        return {};
    }

    isAbout(){
        if (this.state.about) {
            return "selected";
        }
        return "unselected";
    }

    isFolio(){
        if (this.state.folio) {
            return "selected";
        }
        return "unselected";
    }

    toHome() {
        window.scrollTo(0, 0);
        this.setState({
            currentPage: "Home",
            home: true,
            about: false,
            folio: false,
            project: ""
        })
    }

    toAbout() {
        window.scrollTo(0, 0);
        this.setState({
            currentPage: "About",
            home: false,
            about: true,
            folio: false,
            project: ""
        })
    }

    toFolio() {
        window.scrollTo(0, 0);
        this.setState({
            currentPage: "Portfolio",
            home: false,
            about: false,
            folio: true,
            project: ""
        })
    }

    toProject = (id) => {
        window.scrollTo(0, 0);
        this.setState({
            currentPage: "Project",
            home: false,
            about: false,
            folio: false,
            project: id
        })
    }

    currentPage() {
        switch(this.state.currentPage) {
            case "Home":
                return <Home />;
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio filters={this.state.filters} fn={this.toProject} />;
            case "Project":
                switch(this.state.project) {
                    case "habbit":
                        return <Habbit />
                    case "bottle":
                        return <Bottle />
                    case "restoration":
                        return <Restoration />
                    case "hira":
                        return <Hira />
                    case "here":
                        return <Here />
                    case "safely":
                        return <Safely />
                    case "innod":
                        return <Innod />
                    case "engage":
                        return <Engage />
                    case "ford":
                        return <Ford />
                    case "akp":
                        return <Akp />
                    default:
                        return;
                }
            default:
                return;
        }
    }

    pastWorks() {
        if (this.state.currentPage == "Home") {
            return (
                <div>
                    <Bounce right delay={200}>
                    <h2 ref='pastworks' className="blurbs">
                        <div className="action-link" onClick={() => this.toFolio()}><a className="pastworks clickable">Check out some of my past works.</a></div>
                    </h2>
                    </Bounce>
                </div>
            );
        }
    }

    backToFolio() {
        if (this.state.currentPage == "Project" && this.state.project != "") {
            return (
                // <Bounce right delay={200}>
                    <h2 ref='pastworks' className="blurbs">
                        <div class="action-link"><a class="pastworks clickable" onClick={() => this.toFolio()}>Back to my portfolio.</a></div>
                    </h2>
                // </Bounce>
            )
        }
    }

    folioButtons() {
        if (this.state.currentPage == "Portfolio") {
            return (
                <div>
                    <Bounce top>
                        <div>
                            <h1 ref='buttons' class="titles" style={{marginTop: 'auto'}}>Past Works</h1>
                            <div ref='pastworks' className="filter"><h3>Click on the buttons below to filter through my projects.</h3></div>
                        </div>
                    </Bounce>
                    <Bounce right delay={100}>
                        <div className='projects'>
                            <div className="buttonBox" onClick={() => this.toggleButton("sweFilter")}>
                                <img src={swe_off} className="button" />
                                <div className={this.state.sweFilter ? "hoverButtonOn" : "hoverButton"}><img src={swe_on} className="button" /></div>
                            </div>
                            <div className="buttonBox" onClick={() => this.toggleButton("productFilter")}>
                                <img src={product_off} className="button" />
                                <div className={this.state.productFilter ? "hoverButtonOn" : "hoverButton"}><img src={product_on} className="button" /></div>
                            </div>
                            <div className="buttonBox" onClick={() => this.toggleButton("graphicFilter")}>
                                <img src={graphic_off} className="button" />
                                <div className={this.state.graphicFilter ? "hoverButtonOn" : "hoverButton"}><img src={graphic_on} className="button" /></div>
                            </div>
                        </div>
                    </Bounce>
                </div>
            );
        } else {
            return
        }
    }

    toggleButton(filter) {
        let newFilters = []
        if (this.state.sweFilter) {
            newFilters = newFilters.concat(["sweFilter"]);
        }
        if (this.state.productFilter) {
            newFilters = newFilters.concat(["productFilter"]);
        }
        if (this.state.graphicFilter) {
            newFilters = newFilters.concat(["graphicFilter"]);
        }
        switch(filter) {
            case "sweFilter":
                this.setState(prevState => ({
                    sweFilter: !prevState["sweFilter"]
                }));
                if (newFilters.includes("sweFilter")) {
                    for( var i = 0; i < newFilters.length; i++){ 
                        if ( newFilters[i] === "sweFilter") {
                            newFilters.splice(i, 1); 
                        }
                    }
                } else {
                    newFilters = newFilters.concat(["sweFilter"]);
                }
                break;
            case "productFilter":
                this.setState(prevState => ({
                    productFilter: !prevState["productFilter"]
                }));
                if (newFilters.includes("productFilter")) {
                    for( var i = 0; i < newFilters.length; i++){ 
                        if ( newFilters[i] === "productFilter") {
                            newFilters.splice(i, 1); 
                        }
                    }
                } else {
                    newFilters = newFilters.concat(["productFilter"]);
                }
                break;
            case "graphicFilter":
                this.setState(prevState => ({
                    graphicFilter: !prevState["graphicFilter"]
                }));
                if (newFilters.includes("graphicFilter")) {
                    for( var i = 0; i < newFilters.length; i++){ 
                        if ( newFilters[i] === "graphicFilter") {
                            newFilters.splice(i, 1); 
                        }
                    }
                } else {
                    newFilters = newFilters.concat(["graphicFilter"]);
                }
                break;
            default:
                break;
        }
        console.log("newFilters: ", newFilters);
        console.log("state: ", this.state);
        this.setState({
            filters: newFilters
        })
    }

    render() {
        return (
            <div>
                <header>
                        <a id="logo" onClick={() => this.toHome()}><img className="clickable" style={this.isHome()} src={logo}/></a>
                        <nav>
                            <a className={this.isAbout() + " clickable"} onClick={() => this.toAbout()}>About</a>
                            <a className={this.isFolio() + " clickable"} onClick={() => this.toFolio()}>Portfolio</a>
                        </nav>
                </header>
                {this.folioButtons()}
                {this.currentPage()}
                {this.pastWorks()}
                {this.backToFolio()}
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
