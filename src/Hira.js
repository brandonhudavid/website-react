import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Home.css';
import home from './img/hira/hira-home.jpg'
import transcript from './img/hira/hira-transcript.jpg'
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
                <Bounce top><h1>Hira</h1></Bounce>
                <Bounce left delay={50}>
                    <p>A notebook that converts audible lectures into editable text notes.<br/>
                    Created at LA Hacks 2018.<br/></p>
                </Bounce>
                <Bounce left delay={100}>
                    <p className="scope">
                        <b>SCOPE:</b> hackathon<br/>
                        <b>TIME:</b> 3 days<br/>
                        <b>ROLE:</b> backend developer<br/>
                        <br/>
                        <b>devpost:</b> <a target="_blank" className="hira" href="https://devpost.com/software/hira.html">click here</a><br/>
                        <b>source code:</b> <a target="_blank" className="hira" href="https://github.com/recurza/hira">click here</a>
                    </p>
                </Bounce>
                <Bounce right delay={150}>
                    <subtitle className="background">
                        Background
                    </subtitle>
                    <p className="background bg-writeup">
                        LA Hacks is an annual Hackathon hosted at UCLA. <a href="https://devpost.com/brianshanehe" className="hira" target="_blank">Brian He,</a> <a href="https://www.steph.ng" className="hira" target="_blank">Steph Ng,</a> <a href="http://ne-oh.webflow.io" className="hira" target="_blank">Annie Oh,</a> and I formed a team and worked on Hira from March 30th to April 1st.
                    </p>
                </Bounce>
                
                <Bounce left delay={200}>
                    <subtitle>
                        We take bad notes.
                    </subtitle>
                    <p className="writeup">
                        The current note-taking process invovles listening to the lecturer and writing down notes at the same time. However, this process often leads to us taking short, vague notes that are hard to understand. 
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                    <yellow>Hira,</yellow> the notebook that listens for you.
                    </subtitle>
                    <p className="writeup">
                        <yellow><b>Hira</b></yellow> (pronounced <b>hear</b>-uh) is a notebook that helps you take better notes. Using voice recognition technology, it creates <yellow><b>live transcripts</b></yellow> of lectures or meetings. Hira uses the Cornell notes format, which helps users absorb information more effectively through annotation, highlighting, and summary. With Hira, users can focus on identifying information that matters.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        How Hira works.
                    </subtitle>
                    <p className="writeup">
                        Hira uses Web Speech API to convert speech into editable text. While Hira is creating the live transcript, users will be able to add highlights or annotations to the transcribed text. Afterwards, the user can save the transcript and open it later for review or any necessary revisions.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Who is Hira for?
                    </subtitle>
                    <p className="writeup">
                        Hira is for all note-takers, young or old. Hira's live transcripts keep professionals engaged and present at meetings. Hira's highlighting and annotation features also help students remember key points.
                    </p>
                    <div className="proj-collection">
                        <img data-sr="enter bottom move 50px wait 0.2s" className="proj-img40 proj-shadow" src={home}/>
                        <img data-sr="enter bottom move 50px wait 0.25s" className="proj-img40 proj-shadow" src={transcript}/>
                    </div>
                    <div className="proj-collection" style={{marginBottom: 4 + '%'}}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/lHv5MdZoAEI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle className="background">
                        Reflections
                    </subtitle>
                    <p className="background bg-writeup">
                        LA Hacks 2018 was a new experience for most of us since this was our very first Hackathon. Although not sure what to expect in the beginning, it was inspiring to see so many other groups participating and creating new hacks.<br/>
                        <br/>
                        While Brian and I worked specifically on the backend, we ran into many challenges and learning experiences. We learned how to set up a server, figured out how to use Google Speech API and other APIs properly, and persevered through confusion and the pressure of our limited time.<br/>
                        <br/>
                        For our first Hackathon, we were very proud of the end result and the obstacles that we overcame. We also gained intuition of what to expect from a Hackathon and how teams must cooperate when it comes down to the wire.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle className="background">
                        Acknowledgments
                    </subtitle>
                    <p className="background bg-writeup">
                        Thank you to UCLA for hosting LA Hacks 2018, giving us free food, and providing us opportunities to connect with lots of companies. And thank you to Brian, Steph, and Annie for being determined hackers and for making my first Hackathon experience memorable.
                    </p>
                </Bounce>
            </div>
        );
    }
}

export default Habbit;