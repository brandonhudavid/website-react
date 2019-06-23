import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Home.css';
import sprint1 from './img/engage/engage-sprint1.jpg'
import sprint2 from './img/engage/engage-sprint2.jpg'
import flowchart1 from './img/engage/engage-flowchart1.jpg'
import flowchart2 from './img/engage/engage-flowchart2.jpg'
import design1 from './img/engage/engage-design1.jpg'
import design2 from './img/engage/engage-design2.png'
import design3 from './img/engage/engage-design3.png'
import dev1 from './img/engage/engage-dev1.jpg'
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

export class Habbit extends React.Component {

    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div>
                <Bounce top><h1>Engage</h1></Bounce>
                <Bounce left delay={50}>
                    <p>Redefining participation.<br/>
                    A mobile application that facilitates engagement between students and instructors in the classroom.<br/></p>
                </Bounce>
                <Bounce left delay={100}>
                    <p className="scope">
                        <b>SCOPE:</b> semester project for Mobile Developers of Berkeley<br/>
                        <b>TIME:</b> 4 months<br/>
                        <b>ROLE:</b> iOS developer, backend developer, product designer<br/>
                    </p>
                </Bounce>
                <Bounce right delay={150}>
                    <subtitle className="background">
                        <div style={{display: "inline-block"}}>
                        Background
                        </div>
                    </subtitle>
                    <p className="background bg-writeup">
                        For the second half of their first semester in <a href="https://mdb.dev/" className="mdb" target="_blank">Mobile Developers of Berkeley,</a> new members form small teams and work on designing, developing, and deploying a mobile app for the rest of the semester. I worked on developing Engage for iOS with <a href="https://www.linkedin.com/in/shubhaja/" className="engage" target="_blank">Shubha Jagannatha</a> and <a href="https://angel.co/kayli-jiang" className="engage" target="_blank">Kayli Jiang</a> while <a href="https://www.linkedin.com/in/michelle-mao/" className="engage" target="_blank">Michelle Mao</a> and <a href="https://www.linkedin.com/in/jaiveer-singh/" className="engage" target="_blank">Jaiveer Singh</a> worked on Engage for Android.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Communication in the classroom.
                    </subtitle>
                    <p className="writeup">
                        A persistent problem in UC Berkeley computer science classes is the <engage>lack of communication between students and instructors,</engage> which results in ineffective teaching and inefficient use of class time. The root cause of this problem is that <engage>students are afraid to speak up during class.</engage>
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Two perspectives.
                    </subtitle>
                    <p className="writeup" style={{paddingBottom: 16 + 'px'}}>
                        To better understand our situation, we conducted several interviews with students involved with the computer science department. After our interviews, we consolidated our results into two personas.
                    </p>
                    <div className="column-wrapper" style={{marginLeft: 4 + '%'}}>
                        <div className="half-column">
                            <h3>
                                The Student
                            </h3>
                            <p className="writeup">
                                <i>“I’m afraid of sounding stupid or slowing down the entire class.”</i>
                            </p>
                        </div>
                        <div className="half-column">
                            <h3>
                                The Teacher
                            </h3>
                            <p className="writeup">
                                <i>“I get frustrated when I ask if anyone has any questions and I am met with silence.”</i>
                            </p>
                        </div>
                    </div>
                    <p className="writeup">
                        Often times, students that are confused or falling behind will not ask questions due to the fear of sounding dumb or holding back the entire class. And because of this lack of participation and feedback, instructors are unsure of how the class is doing overall.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        What <engage>engage</engage> means.
                    </subtitle>
                    <p className="writeup">
                        Students <b>participate.</b> Teachers <b>adapt.</b> And together, they <engage>engage.</engage>
                    </p>
                    <p className="writeup" style={{paddingBottom: 16 + 'px'}}>
                        We utilize this tagline to drive our decision-making in implementing and refining our features.
                    </p>
                    <div className="column-wrapper">
                        <div className="third-column">
                            <h3>
                                Participate
                            </h3>
                            <p className="writeup">
                                Promote student participation in discussions and lectures with interactive tools.
                            </p>
                        </div>
                        <div className="third-column">
                            <h3>
                                Adapt
                            </h3>
                            <p className="writeup">
                                Help teachers captivate their students by adjusting their pace according to student feedback.
                            </p>
                        </div>
                        <div className="third-column">
                            <h3>
                                <engage>Engage</engage>
                            </h3>
                            <p className="writeup">
                                Allow both parties to be fully involved in the teaching and learning experience.
                            </p>
                        </div>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Ideation.
                    </subtitle>
                    <p className="writeup">
                        Since we started working on Engage halfway through the semester and had to finish three weeks before the semester ended, we didn't have much time to work with. At our first work session, we adopted an accelerated version of GV's five-day <a href="https://www.gv.com/sprint/" className="engage" target="_blank">Design Sprint,</a> a process to discuss ideas and devise design solutions for our application. We began by creating a checklist of tasks to accomplish, long term goals for our app's impact, and essential sprint questions to address ways we could fail.
                    </p>
                </Bounce>
                    <div className="proj-collection">
                        <Bounce left delay={200}><img className="proj-img20 proj-shadow" src={sprint1}/></Bounce>
                        <Bounce left delay={200}><img className="proj-img40 proj-shadow" src={sprint2}/></Bounce>
                    </div>
                <Bounce left delay={200}>
                    <p className="writeup">
                        We then made a flowchart of key players, our desired goals, and how these key players would interact with our app in order to achieve our goals. We focused on workflows for students, discussion leaders, and lecturers. We also wrote on sticky notes to pose <a href="https://designsprintkit.withgoogle.com/methodology/phase1-understand/how-might-we" className="engage" target="_blank">"How Might We"</a> questions that focused on how our app would implement this flowchart.
                    </p>
                </Bounce>
                <div className="proj-collection">
                    <Bounce left delay={200}><img className="proj-img40 proj-shadow" src={flowchart1}/></Bounce>
                    <Bounce left delay={200}><img className="proj-img40 proj-shadow" src={flowchart2}/></Bounce>
                </div>
                <Bounce left delay={200}>
                    <subtitle>
                        Design.
                    </subtitle>
                    <p className="writeup">
                        Afterwards, we selected a few of the sticky notes to focus on and began iterating through low-fidelity wireframes of potential app features that would address our questions. These sketches consisted of various ways for students to interact with the app and for teachers to view the collective understanding of students in the class.</p>
                    <p className="writeup">
                        Our largest design challenge was making the interface elaborate enough to be understood but not so distracting   that it would attract students' attention from the class. We collectively chose our favorite iterations, which would become our reference for designing the minimum viable product.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-photo proj-shadow" src={design1}/>
                    </div>
                    <p className="writeup">
                        For students to communicate their understanding level, or "engagement index," we designed a landscape-oriented slider. We decided on the landscape orientation to deter students from using their phone for more distracting uses, which are usually portrait-oriented. 
                    </p>
                    <p className="writeup">
                        Using Figma, we created high-fidelity versions of our initial sketches, first in grayscale and then in color. We chose to work with a dark color scheme in order to pose as little of a distraction in the classroom.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={design2}/>
                        <img className="proj-img40 proj-shadow" src={design3}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Development.
                    </subtitle>
                    <p className="writeup">
                        Since our team decided to make a cross-platform app (one in native iOS, another in native Android), communication was imperative to ensure that our apps were developed consistently. As an example, since we used a single Firebase backend for both platforms, we drew out a database tree so all of us would be on the same page for how the backend is structured.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={dev1}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle className="background">
                        Acknowledgments
                    </subtitle>
                    <p className="background bg-writeup">
                        Thank you to Shubha, Kayli, Michelle, and Jaiveer for coming up with Engage and being awesome teammates. A big thanks to Aayush Tyagi for training us to become the best developers that we can be. And thank you to Mobile Developers of Berkeley for the extensive training program and for providing us the opportunity to develop our own app from scratch.
                    </p>
                </Bounce>
            </div>
        );
    }
}

export default Habbit;