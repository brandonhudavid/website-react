import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Home.css';
import tracker1 from './img/habbit/habbit-tracker1.jpg'
import tracker2 from './img/habbit/habbit-tracker2.jpg'
import tracker3 from './img/habbit/habbit-tracker3.jpg'
import logo1 from './img/habbit/habbit-logo1.png'
import colors from './img/habbit/habbit-colors.png'
import logo2 from './img/habbit/habbit-logo2.png'
import wireframe from './img/habbit/habbit-wireframe.png'
import backend from './img/habbit/habbit-backend.png'
import gif1 from './img/habbit/habbit-tutorial.gif'
import gif2 from './img/habbit/habbit-perform.gif'
import gif3 from './img/habbit/habbit-tracker.gif'
import photo from './img/habbit/habbit-photo.JPG'
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
                    <Link to={process.env.PUBLIC_URL + "/"}>
                        <a id="logo"><img className="unselected clickable" src={logo}/></a>
                    </Link>
                    <nav>
                        <Link to={process.env.PUBLIC_URL + "/about"}>
                            <a className={"unselected clickable"}>About</a>
                        </Link>
                        <Link to={process.env.PUBLIC_URL + "/portfolio"}>
                            <a className={"selected clickable"}>Portfolio</a>
                        </Link>
                    </nav>
                </header>
                <Bounce top><h1>Habbit</h1></Bounce>
                <Bounce left delay={50}>
                    <p>An iOS mobile app that allows users to track their healthy habits efficiently.<br/>
                    Best Design, iOS DeCal Spring 2018.<br/></p>
                </Bounce>
                <Bounce left delay={100}>
                    <p className="scope">
                        <b>SCOPE:</b> iOS Development class project<br/>
                        <b>TIME:</b> 3 months<br/>
                        <b>ROLE:</b> product designer, iOS developer<br/>
                        <br/>
                        <b>source code:</b> <a target="_blank" className="orange" href="https://github.com/brandonhudavid/ios-custom-app">click here</a>
                    </p>
                </Bounce>
                <Bounce right delay={150}>
                    <subtitle className="background">
                        <div style={{display: "inline-block"}}>
                        Background
                        </div>
                    </subtitle>
                    <p className="background bg-writeup">
                        UC Berkeley's iOS DeCal is a student-led class offered to those who want to learn how to use Swift and make iPhone apps. The final project is to create an iOS app from scratch. My project partner, <a href="http://irishou.me" className="orange" target="_blank">Iris Hou,</a> and I wanted to make an app that would improve the efficiency of people's everyday lives.
                    </p>
                </Bounce>
                
                <Bounce left delay={200}>
                    <subtitle>
                        Routine is difficult.
                    </subtitle>
                    <p className="writeup">
                        Often times, people set goals for themselves—casual or ambitious—that can be attained through habitual efforts. However, being motivated to follow a consistent routine can be difficult. Also, once the routine is broken, it can be hard to get back in rhythm.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Inspiration from bullet journaling.
                    </subtitle>
                    <p className="writeup">
                        The idea behind Habbit was heavily influenced by a popular bullet journaling element, a tracker, used to help keep track of daily habits and tasks.
                    </p>
                    <div className="proj-collection">
                        <img data-sr="enter bottom move 50px wait 0.2s" className="proj-img20 proj-shadow" src={tracker1}/>
                        <img data-sr="enter bottom move 50px wait 0.25s" className="proj-img20 proj-shadow" src={tracker2}/>
                        <img data-sr="enter bottom move 50px wait 0.3s" className="proj-img20 proj-shadow" src={tracker3}/>
                    </div>
                    <p className="writeup">
                        Carrying around a bullet journal can be troublesome and could result in damaging the journal over time. On the other hand, having a mobile app as a tracker is much more convenient. People bring their phones everywhere, and the tracker would be beneficial to those without bullet journals.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        <orange>Habbit,</orange> the mobile habit tracker.
                    </subtitle>
                    <p className="writeup">
                        <orange><b>Habbit</b></orange> is an iOS app that helps you keep up with healthy daily <orange><b><i>habbits.</i></b></orange> Keeping track of your habbits is as simple as tapping an icon. Look at habbits you've completed in the past with the <orange><b>tracker</b></orange> feature. Set and fulfill your goals efficiently with Habbit.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Logo design and color scheme.
                    </subtitle>
                    <p className="writeup">
                        We noted that the words "habit" and "rabbit" looked and sounded familiar, so we created a bunny rabbit logo for our app. We originally named the app "Rabit", but eventually changed it to "Habbit". We then decided on a color scheme with green (resembling carrot leaves), white (for the rabbit), and orange (for the carrot itself). We would later decide to only use the white and orange colors for the app.
                    </p>
                    <div className="proj-collection">
                        <img data-sr="enter bottom move 50px wait 0.2s" className="proj-img20 proj-shadow" src={logo1}/>
                        <img data-sr="enter bottom move 50px wait 0.25s" className="proj-img20 proj-shadow" src={colors}/>
                        <img data-sr="enter bottom move 50px wait 0.3s" className="proj-img20 proj-shadow" src={logo2}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Low fidelity designs and wireframes.
                    </subtitle>
                    <p className="writeup">
                        For the app's workflow, we wanted the initial page to display all of the user's current habbits, making it easy for users to view and select habbits they have performed. From there, users could either add and delete habbits, or view another tracker page that displays a grid of habbits performed in the past.<br/>
                        <br/>
                        We decided to use <a target="_blank" className="orange" href="https://firebase.google.com"><b>Firebase</b></a> as our backend. The backend database would comprise of each user having a user ID, and each user ID having multiple children representing the habbits that the user has created. Every habbit would have information regarding when it was performed in the past and if it was performed today. <br/> 
                    </p>
                    <div className="proj-collection">
                        <img data-sr="enter bottom move 50px wait 0.2s" className="proj-img20 proj-shadow" src={wireframe}/>
                        <img data-sr="enter bottom move 50px wait 0.25s" className="proj-img20 proj-shadow" src={backend}/>
                    </div>
                </Bounce>
                <div className="column-wrapper">
                    <Bounce top delay={100}>
                        <div className="third-column">
                            <subtitle>
                                Tutorial for new users.
                            </subtitle>
                            <p style={{marginBottom: 8 + '%'}} className="writeup">
                                If Habbit recognizes that a new user has been created, the app will give a short tutorial sequence showing the user where essential functionalities are located. Tutorial created using <a href="https://github.com/yukiasai/Gecco" className="orange" target="_blank"><b>Gecco API.</b></a>
                            </p>
                            <img className="proj-gif proj-shadow" src={gif1}/>
                        </div>
                    </Bounce>
                    <Bounce bottom delay={200}>
                        <div className="third-column">
                            <subtitle>
                                Creating, performing, and deleting habbits.
                            </subtitle>
                            <p style={{marginBottom: 8 + '%'}} className="writeup">
                                Users create a habbit by typing in a name and select an appropriate icon. A check mark represents performing that habbit today. Data is stored in the Firebase database.
                            </p>
                            <img className="proj-gif proj-shadow" src={gif2}/>
                        </div>
                    </Bounce>
                    <Bounce top delay={350}>
                        <div className="third-column">
                            <subtitle>
                                Using the tracker.
                            </subtitle>
                            <p style={{marginBottom: 8 + '%'}} className="writeup">
                                The tracker displays habbits completed in the last seven days. Implemented with <a href="https://github.com/KyoheiG3/GridView" className="orange" target="_blank"><b>GridView API.</b></a>
                            </p>
                            <img className="proj-gif proj-shadow" src={gif3}/>
                        </div>
                    </Bounce>
                </div>
                <Bounce left delay={200}>
                    <subtitle className="background">
                        Reflections
                    </subtitle>
                    <p className="background bg-writeup">
                        Creating Habbit was a challenging yet rewarding experience, especially for our first time making a mobile app. We spent a large amount of time deciding the entire structure before even coding anything since we did not want to waste any time backtracking. It also took some time to learn how certain APIs worked and if they would even contribute to our app.<br/>
                        <br/>
                        Through the making of Habbit, we gained a more thorough understanding of how a design concept translates into an actual product. I also gained a greater appreciation for backend as I worked closely with Firebase throughout the project.<br/>
                        <br/>
                        Overall, we learned a lot and I am motivated to pursue similar projects in the near future.
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
                        Thank you to Chris, Daniel, Nithi, and all the teaching assistants for running the iOS DeCal this semester. Thank you to Professor Dan Garcia for creating the iOS DeCal and giving us lots of advice on presentation day. And thank you to Iris for being an awesome project partner and creating Habbit with me.
                    </p>
                </Bounce>
                <Link to={process.env.PUBLIC_URL + "/portfolio"}>
                    <h2 ref='pastworks' className="blurbs">
                        <div class="action-link"><a class="pastworks clickable">Back to my portfolio.</a></div>
                    </h2>
                </Link>
            </div>
        );
    }
}

export default Habbit;