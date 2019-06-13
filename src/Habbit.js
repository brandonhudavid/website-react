import React from 'react';
import './Home.css';
import sr from './ScrollReveal'

export class Habbit extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <subtitle className="background">
                        Background
                    </subtitle>
                    <p className="background bg-writeup">
                        UC Berkeley's iOS DeCal is a student-led class offered to those who want to learn how to use Swift and make iPhone apps. The final project is to create an iOS app from scratch. My project partner, <a id="hi-orange" href="http://irishou.me" target="_blank">Iris Hou,</a> and I wanted to make an app that would improve the efficiency of people's everyday lives.
                    </p>
                </div>
                <div>
                    <subtitle>
                        Routine is difficult.
                    </subtitle>
                    <p className="writeup">
                        Often times, people set goals for themselves—casual or ambitious—that can be attained through habitual efforts. However, being motivated to follow a consistent routine can be difficult. Also, once the routine is broken, it can be hard to get back in rhythm.
                    </p>
                </div>
                <div>
                    <subtitle>
                        Inspiration from bullet journaling.
                    </subtitle>
                    <p className="writeup">
                        The idea behind Habbit was heavily influenced by a popular bullet journaling element, a tracker, used to help keep track of daily habits and tasks.
                    </p>
                    <div class="proj-collection">
                        <a href="css/src/habbit/habbit-tracker1.jpg" target="_blank"><img data-sr="enter bottom move 50px wait 0.2s" class="proj-img bottle1 shadow" src="css/src/habbit/habbit-tracker1.jpg"/></a>
                        <a href="css/src/habbit/habbit-tracker2.jpg" target="_blank"><img data-sr="enter bottom move 50px wait 0.25s" class="proj-img bottle1 shadow" src="css/src/habbit/habbit-tracker2.jpg"/></a>
                        <a href="css/src/habbit/habbit-tracker3.jpg" target="_blank"><img data-sr="enter bottom move 50px wait 0.3s" class="proj-img bottle1 shadow" src="css/src/habbit/habbit-tracker3.jpg"/></a>
                    </div>
                    <p className="writeup">
                        Carrying around a bullet journal can be troublesome and could result in damaging the journal over time. On the other hand, having a mobile app as a tracker is much more convenient. People bring their phones everywhere, and the tracker would be beneficial to those without bullet journals.
                    </p>
                </div>
                <div>
                    <subtitle>
                        Introducing <orange>Habbit,</orange> the mobile habit tracker.
                    </subtitle>
                    <p className="writeup">
                        <orange><b>Habbit</b></orange> is an iOS app that helps you keep up with healthy daily <orange><b><i>habbits.</i></b></orange> Keeping track of your habbits is as simple as tapping an icon. Look at habbits you've completed in the past with the <orange><b>tracker</b></orange> feature. Set and fulfill your goals efficiently with Habbit.
                    </p>
                </div>
                <div>
                    <subtitle>
                        Logo design and color scheme.
                    </subtitle>
                    <p className="writeup">
                        We noted that the words "habit" and "rabbit" looked and sounded familiar, so we created a bunny rabbit logo for our app. We originally named the app "Rabit", but eventually changed it to "Habbit". We then decided on a color scheme with green (resembling carrot leaves), white (for the rabbit), and orange (for the carrot itself). We would later decide to only use the white and orange colors for the app.
                    </p>
                    <div class="proj-collection">
                        <a href="css/src/habbit/habbit-logo1.png" target="_blank"><img data-sr="enter bottom move 50px wait 0.2s" class="proj-img habbit1 shadow" src="css/src/habbit/habbit-logo1.png"/></a>
                        <a href="css/src/habbit/habbit-colors.png" target="_blank"><img data-sr="enter bottom move 50px wait 0.25s" class="proj-img habbit2 shadow" src="css/src/habbit/habbit-colors.png"/></a>
                        <a href="css/src/habbit/habbit-logo2.png" target="_blank"><img data-sr="enter bottom move 50px wait 0.3s" class="proj-img habbit1 shadow" src="css/src/habbit/habbit-logo2.png"/></a>
                    </div>
                </div>
                <div>
                    <subtitle>
                        Low fidelity designs and wireframes.
                    </subtitle>
                    <p className="writeup">
                        For the app's workflow, we wanted the initial page to display all of the user's current habbits, making it easy for users to view and select habbits they have performed. From there, users could either add and delete habbits, or view another tracker page that displays a grid of habbits performed in the past.<br/>
                        <br/>
                        We decided to use <a id="hi-orange" href="https://firebase.google.com" target="_blank"><b>Firebase</b></a> as our backend. The backend database would comprise of each user having a user ID, and each user ID having multiple children representing the habbits that the user has created. Every habbit would have information regarding when it was performed in the past and if it was performed today. <br/> 
                    </p>
                    <div class="proj-collection">
                        <a href="css/src/habbit/habbit-wireframe.png" target="_blank"><img data-sr="enter bottom move 50px wait 0.2s" class="proj-img habbit3 shadow" src="css/src/habbit/habbit-wireframe.png"/></a>
                        <a href="css/src/habbit/habbit-backend.png" target="_blank"><img data-sr="enter bottom move 50px wait 0.3s" class="proj-img habbit1 shadow" src="css/src/habbit/habbit-backend.png"/></a>
                    </div>
                </div>
                <div>
                    <subtitle>
                        Tutorial for new users.
                    </subtitle>
                    <p className="writeup">
                        If Habbit recognizes that a new user has been created, the app will give a short tutorial sequence showing the user where essential functionalities are located. Tutorial created using <a id="hi-orange" href="https://github.com/yukiasai/Gecco" target="_blank"><b>Gecco API.</b></a>
                    </p>
                    <div class="proj-collection">
                        <a href="css/src/habbit/habbit-tutorial.gif" target="_blank"><img class="proj-img habbit3" src="css/src/habbit/habbit-tutorial.gif"/></a>
                    </div>
                </div>
                <div>
                    <subtitle>
                        Creating, performing, and deleting habbits.
                    </subtitle>
                    <p className="writeup">
                        Users create a habbit by typing in a name and select an appropriate icon. A check mark represents performing that habbit today. Data is stored in the Firebase database.
                    </p>
                    <div class="proj-collection">
                        <a href="css/src/habbit/habbit-perform.gif" target="_blank"><img class="proj-img habbit3" src="css/src/habbit/habbit-perform.gif"/></a>
                    </div>
                </div>
                <div>
                    <subtitle>
                        Using the tracker.
                    </subtitle>
                    <p className="writeup">
                        The tracker displays habbits completed in the last seven days. Implemented with <a id="hi-orange" href="https://github.com/KyoheiG3/GridView" target="_blank"><b>GridView API.</b></a>
                    </p>
                    <div class="proj-collection">
                        <a href="css/src/habbit/habbit-tracker.gif" target="_blank"><img class="proj-img habbit3" src="css/src/habbit/habbit-tracker.gif"/></a>
                    </div>
                </div>
                <div>
                    <subtitle>
                        Reflections
                    </subtitle>
                    <p className="writeup">
                        Creating Habbit was a challenging yet rewarding experience, especially for our first time making a mobile app. We spent a large amount of time deciding the entire structure before even coding anything since we did not want to waste any time backtracking. It also took some time to learn how certain APIs worked and if they would even contribute to our app.<br/>
                        <br/>
                        Through the making of Habbit, we gained a more thorough understanding of how a design concept translates into an actual product. I also gained a greater appreciation for backend as I worked closely with Firebase throughout the project.<br/>
                        <br/>
                        Overall, we learned a lot and I am motivated to pursue similar projects in the near future.
                    </p>
                    <div class="proj-collection">
                        <img data-sr="enter bottom move 50px wait 0.2s" class="proj-img habbit0 shadow" src="css/src/habbit/habbit-photo.JPG"/>
                    </div>
                </div>
                <div>
                    <subtitle>
                        Acknowledgments
                    </subtitle>
                    <p className="writeup">
                        Thank you to Chris, Daniel, Nithi, and all the teaching assistants for running the iOS DeCal this semester. Thank you to Professor Dan Garcia for creating the iOS DeCal and giving us lots of advice on presentation day. And thank you to Iris for being an awesome project partner and creating Habbit with me.
                    </p>
                </div>
            </div>
        );
    }
}

export default Habbit;