import React from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import Home from './Home';
import About from "./About";
// import Portfolio from "./Portfolio";
import FolioData from "./FolioData"
import Project from "./Project"
import Habbit from "./Habbit"
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
            delay: 400,
            distance: '50px',
            scale: 1,
            easing: 'ease',
          }
          sr.reveal(this.refs.iv, config4)
          const config5 = {
            origin: 'left',
            duration: 500,
            delay: 200,
            distance: '50px',
            scale: 1,
            easing: 'ease',
          }
          sr.reveal(this.refs.v, config5)
          const config6 = {
            origin: 'left',
            duration: 500,
            delay: 400,
            distance: '50px',
            scale: 1,
            easing: 'ease',
          }
          sr.reveal(this.refs.vi, config6)
    }

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

    render(){
        return (
            <div>
                <div id="container">
                    <div>
                        {this.filterProjects().map((project, index) =>
                            <div className="clickable" onClick={() => this.props.fn(project.id)}>
                                <Project key={project.id} id={project.id} name={project.name} description={project.description} date={project.date} tags={project.tags} index={index} />
                            </div>
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
            sweFilter: false,
            iosFilter: false,
            productFilter: false,
            graphicFilter: false,
            filters: []
        }
    }
    

    componentDidMount = () => {
        const config = {
          origin: 'right',
          duration: 500,
          delay: 300,
          distance: '50px',
          scale: 1,
          easing: 'ease',
        }
        sr.reveal(this.refs.pastworks, config)
        const config2 = {
            origin: 'right',
            duration: 500,
            delay: 100,
            distance: '50px',
            scale: 1,
            easing: 'ease',
          }
          sr.reveal(this.refs.buttons, config2)
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
        this.setState({
            currentPage: "Home",
            home: true,
            about: false,
            folio: false
        })
    }

    toAbout() {
        this.setState({
            currentPage: "About",
            home: false,
            about: true,
            folio: false
        })
    }

    toFolio() {
        this.setState({
            currentPage: "Portfolio",
            home: false,
            about: false,
            folio: true
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

    folioButtons() {
        if (this.state.currentPage == "Portfolio") {
            return (
                <div>
                    <div>
                        <h1 ref='buttons' class="titles" style={{marginTop: 'auto'}}>Past Works</h1>
                        <div ref='pastworks' className="filter"><h3>Click on the buttons below to filter through my projects.</h3></div>
                    </div>
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
                {/* {this.toProject()} */}
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
