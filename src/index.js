import React from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import Home from './Home';
import About from "./About";
import Portfolio from "./Portfolio";
import TwitchTweets from './TwitchTweets';
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
import Optimizely from "./Optimizely"
import ArtDesign from "./ArtDesign"
import swe_on from "./img/swe-on.png"
import product_on from "./img/product-on.png"
import graphic_on from "./img/graphic-on.png"
import swe_off from "./img/swe-off.png"
import product_off from "./img/product-off.png"
import graphic_off from "./img/graphic-off.png"
import Bounce from 'react-reveal/Bounce';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Error from "./Error"

const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (
        React.createElement(component, finalProps)
    );
}

const PropsRoute = ({component, ...rest}) => {
    return (
        <Route {...rest} render={routeProps => {
            return renderMergedProps(component, routeProps, rest);
        }}/>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Home",
            home: true,
            about: false,
            folio: false,
            art: false,
            project: "",
            sweFilter: false,
            iosFilter: false,
            productFilter: false,
            graphicFilter: false,
            filters: []
        }
    }

    toHome() {
        window.scrollTo(0, 0);
        this.setState({
            currentPage: "Home",
            home: true,
            about: false,
            folio: false,
            art: false,
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
            art: false,
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
            art: false,
            project: ""
        })
    }

    toArt() {
        window.scrollTo(0, 0);
        this.setState({
            currentPage: "Art",
            home: false,
            about: false,
            folio: false,
            art: true,
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
            art: false,
            project: id
        })
    }

    toArtwork = (id) => {
        window.scrollTo(0, 0);
        this.setState({
            currentPage: "Artwork",
            home: false,
            about: false,
            folio: false,
            art: false,
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
            case "Art":
                return <ArtDesign fn={this.toArtwork}/>;
            case "Project", "Artwork":
                switch(this.state.project) {
                    case "twitchtweets":
                        return <TwitchTweets />
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
                    case "akp":
                        return <Optimizely />
                    default:
                        return;
                }
            default:
                return;
        }
    }

    backToFolio() {
        if (this.state.currentPage == "Project" && this.state.project != "") {
            return (
                <h2 ref='pastworks' className="blurbs">
                    <div class="action-link"><a class="pastworks clickable" onClick={() => this.toFolio()}>Back to my portfolio.</a></div>
                </h2>
            )
        }
    }

    backToArt() {
        if (this.state.currentPage == "Artwork" && this.state.project != "") {
            return (
                <h2 ref='pastworks' className="blurbs">
                    <div class="action-link"><a class="pastworks clickable" onClick={() => this.toFolio()}>Back to my art and deisgn work.</a></div>
                </h2>
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
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
                    <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
                    <PropsRoute path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio} filters={this.state.filters} />
                    <PropsRoute path={process.env.PUBLIC_URL + "/art"} component={ArtDesign} filters={this.state.filters} />
                    <Route path={process.env.PUBLIC_URL + "/twitchtweets"} component={TwitchTweets} />
                    <Route path={process.env.PUBLIC_URL + "/optimizely"} component={Optimizely} />
                    <Route path={process.env.PUBLIC_URL + "/ford"} component={Ford} />
                    <Route path={process.env.PUBLIC_URL + "/engage"} component={Engage} />
                    <Route path={process.env.PUBLIC_URL + "/innod"} component={Innod} />
                    <Route path={process.env.PUBLIC_URL + "/safely"} component={Safely} />
                    <Route path={process.env.PUBLIC_URL + "/here"} component={Here} />
                    <Route path={process.env.PUBLIC_URL + "/habbit"} component={Habbit} />
                    <Route path={process.env.PUBLIC_URL + "/hira"} component={Hira} />
                    <Route path={process.env.PUBLIC_URL + "/bottle"} component={Bottle} />
                    <Route path={process.env.PUBLIC_URL + "/restoration"} component={Restoration} />
                    
                    <Route component={Error} />
                </Switch>
            </HashRouter>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
