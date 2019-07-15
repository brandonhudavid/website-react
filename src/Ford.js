import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Home.css';
import colors from './img/ford/ford-colors.png'
import auth_lo from './img/ford/ford-auth-lo.png'
import auth_hi from './img/ford/ford-auth-hi.png'
import map_lo from './img/ford/ford-map-lo.png'
import map_hi from './img/ford/ford-map-hi.png'
import start from './img/ford/ford-start.png'
import start_sync from './img/ford/ford-start-sync.png'
import search from './img/ford/ford-search.png'
import search_sync from './img/ford/ford-search-sync.png'
import aircraft_lo from './img/ford/ford-aircraft-lo.png'
import aircraft_hi from './img/ford/ford-aircraft-hi.png'
import checklist from './img/ford/ford-checklist.png'
import tracker from './img/ford/ford-tracker.png'
import flights_map from './img/ford/ford-flights-map.png'
import photo from './img/ford/ford-photo.jpg'
import logo from './img/logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Habbit extends React.Component {

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
                    <Link to="/">
                        <a id="logo"><img className="unselected clickable" src={logo}/></a>
                    </Link>
                    <nav>
                        <Link to="/about">
                            <a className={"selected clickable"}>About</a>
                        </Link>
                        <Link to="/portfolio">
                            <a className={"unselected clickable"}>Portfolio</a>
                        </Link>
                    </nav>
                </header>
                <Bounce top><h1>Ford UAV</h1></Bounce>
                <Bounce left delay={50}>
                    <p>Designing an iOS application to help Ford's drones team manage their aircraft flights.<br/>
                    Contracted by Mobile Developers of Berkeley.<br/></p>
                </Bounce>
                <Bounce left delay={100}>
                    <p className="scope">
                        <b>SCOPE:</b> contracted project for Ford<br/>
                        <b>TIME:</b> 3 months<br/>
                        <b>ROLE:</b> lead product designer<br/>
                        <br/>
                        <b>figma:</b> <a target="_blank" className="ford" href="https://www.figma.com/file/e9mix38NOVx8NTHh1P8V5C/Ford-Hi-Fi-2?node-id=0%3A1">click here</a>
                    </p>
                </Bounce>
                <Bounce right delay={150}>
                    <subtitle className="background">
                        <div style={{display: "inline-block"}}>
                        Background
                        </div>
                    </subtitle>
                    <p className="background bg-writeup">
                        Every semester, Mobile Developers of Berkeley dedicates several teams to work on contracted projects for other organizations or businesses. In the spring of 2019, I worked as the lead product designer on a contract with Ford's unmanned aerial vehicle (UAV) team. Also working on the contract was program manager <a target="_blank" href="http://www.isthisangela.com/" className="ford">Angela Dong,</a> contracting officer <a target="_blank" href="http://srujayk.com/" className="ford">Srujay Korlakunta,</a> and iOS developers <a target="_blank" href="https://angel.co/kayli-jiang" className="ford">Kayli Jiang</a> and <a target="_blank" href="https://www.linkedin.com/in/xisabellalau/" className="ford">Izzie Lau.</a>
                    </p>
                </Bounce>
                
                <Bounce left delay={200}>
                    <subtitle>
                        Managing aircraft flights.
                    </subtitle>
                    <p className="writeup">
                        Ford UAV requested a mobile application that would allow their team to log and view their aircraft flights. The app would have to scrape and visualize airspace restriction data published by the <a target="_blank" href="https://www.faa.gov" className="ford">Federal Aviation Administration (FAA).</a> The app would also have <a target="_blank" href="https://www.ford.com/technology/sync/" className="ford">Ford Sync,</a> the ability to sync with Ford vehicles' screen interfaces.
                    </p>
                    <p className="writeup">
                        We set up weekly design meetings with Ford engineers in order to ensure that we were on the same page with what we envisioned for the app. The meetings were mainly discussions about ways to design and implement essential features. We started with low-fidelity grayscale wireframes on Figma, which gradually turned into high-fidelity colored mockups for the entire app.
                    </p>
                </Bounce>

                <Bounce left delay={200}>
                    <subtitle>
                        Designing for two different interfaces.
                    </subtitle>
                    <p className="writeup">
                        Since the app would have Ford Sync functionality, we also inquired about creating designs for the car screen interface. We had to keep in mind some limitations of the interface; for example, scrolling functionality is not strongly supported, and using a keyboard requires the entire screen.
                    </p>
                    <p className="writeup">
                        Using dimensions provided by the Ford engineers, we designed two versions of each feature: one in potrait orientation for the mobile app, and another in landscape for the car screen.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Color scheme.
                    </subtitle>
                    <p className="writeup">
                        I asked the engineers if Ford had a branding scheme that they would like us to comply with. They provided us with the styling guide for <a href="https://owner.ford.com/fordpass.html" target="_blank" className="ford">FordPass,</a> a Ford app that helps users monitor their Ford vehicle.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={colors}/>
                    </div>
                    <p className="writeup">
                        For visualizing FAA data, we were to simplify restricted zones into two levels of severity. We split these zones based on <a style={{color: "orange", fontWeight: 700}}>warnings</a> and higher-level <a style={{color: "red", fontWeight: 700}}>restrictions.</a>
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        User authentication.
                    </subtitle>
                    <p className="writeup">
                        Users should have to create an account in order to log their flights and view previous records. We created a simple authentication page that prompts users for their name, email, and password.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={auth_lo}/>
                        <img className="proj-img40 proj-shadow" src={auth_hi}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        The map view.
                    </subtitle>
                    <p className="writeup">
                        We designed a screen-wide map view to display FAA data and begin logging aircraft flights. FAA zones can be tapped to reveal more information about the warning or restriction. The map view also includes an adjustable flight radius around the user's current location, a search bar to search other locations, a hamburger button at the top left, a button at the top right to center the map view on the user's location, and a blue-accented button at the bottom right.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={map_lo}/>
                        <img className="proj-img40 proj-shadow" src={map_hi}/>
                    </div>
                    <p className="writeup">
                        Tapping on the hamburger button reveals a side panel that allows the user to see past flights, manage info about their aircrafts, and view a pre-flight checklist.
                    </p>
                    <p className="writeup">
                        When the blue-accented button is tapped, a bottom drawer pops up and lists any FAA zones within the flight radius. The drawer can be expanded to view more detailed information about the zones. Clicking on the blue button again will commence flight logging. For Ford Sync, since scrolling is not as smooth, the drawer is repalaced with a button that reveals warning details.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={start}/>
                        <img className="proj-img40 proj-shadow" src={start_sync}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Searching for locations.
                    </subtitle>
                    <p className="writeup">
                        Tapping on the search bar brings up a search page that initially shows recently searched locations. When a location is searched, the map view pans to this location and a pin is dropped, with its color depending on the FAA zones within the flight radius. The blue-accented button is removed because users should only be able to start flights at their current location.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={search}/>
                        <img className="proj-img40 proj-shadow" src={search_sync}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Aircrafts.
                    </subtitle>
                    <p className="writeup">
                        The Aircrafts page shows a list of aircrafts used by the user and a button at the top right to add any more aircrafts. By tapping an aircraft's cell, the user is sent to an Aircraft Details page with information about the model, date purchased, number of flights, total flight time, and the aircraft's past flights sorted by recency.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={aircraft_lo}/>
                        <img className="proj-img40 proj-shadow" src={aircraft_hi}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        The pre-flight checklist.
                    </subtitle>
                    <p className="writeup">
                        The Pre-Flight Checklist page suggests tasks for the aircraft operator to perform the day before the flight and immediately before the flight. The user can check off tasks and customize their checklist.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={checklist}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Logging aircraft flights.
                    </subtitle>
                    <p className="writeup">
                        We created two different ways for users to view their past flights.
                    </p>
                    <div className="column-wrapper">
                        <div className="half-column">
                            <p style={{marginBottom: 8 + '%'}} className="writeup">
                                With the <a className="ford">Tracker,</a> users can see all of their past flights in a list view, sorted chronologically by default. Users also have the option to sort by duration of flight and by aircraft model.
                            </p>
                        </div>
                
                        <div className="half-column">
                            <p style={{marginBottom: 8 + '%'}} className="writeup">
                            Users can also use the <a className="ford">Map</a> to view pins at locations where past flights have taken place. They can further filter their results by querying for flights that occurred within a set date range.
                            </p>
                            
                        </div>
                    </div>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={tracker}/>
                        <img className="proj-img40 proj-shadow" src={flights_map}/>
                    </div>
                    <p className="writeup">
                        Clicking on one of the flights' cells leads the user to a Flight Details page that provides more information about the flight, including the aircraft, start time, duration, maximum altitude, a screenshot of the map view showing nearby FAA zones at the time of the flight, and a Notes section where users can enter any extra details about the flight.  
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle className="background">
                        Reflections
                    </subtitle>
                    <p className="background bg-writeup">
                        Working on this mobile app for Ford was a rewarding experience. I enjoyed communicating with the Ford engineers about the design changes we made each week while they provided insightful feedback and suggestions for what the next iterations could include. This was my first time working on product design for a larger organization, and it feels fulfilling that the designs were well-received. The developers are continuing to develop the Ford app and are projected to finish by the end of summer 2019.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-photo proj-shadow" src={photo}/>
                    </div>
                    </Bounce>
                <Bounce left delay={200}>
                    <subtitle className="background">
                        Acknowledgments
                    </subtitle>
                    <p className="background bg-writeup">
                        Thank you to Ford and the engineers that maintained communication with us throughout the development of this project. Thanks to Srujay for managing the contract, and to Kayli and Izzie for making the app come to life. Special thanks to Angela for being a competent PM and a slightly-more-than-competent friend.
                    </p>
                </Bounce>
                <Link to="/portfolio">
                    <h2 ref='pastworks' className="blurbs">
                        <div class="action-link"><a class="pastworks clickable">Back to my portfolio.</a></div>
                    </h2>
                </Link>
            </div>
        );
    }
}

export default Habbit;