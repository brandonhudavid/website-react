import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Home.css';
import tracker1 from './img/habbit/habbit-tracker1.jpg'
import process1 from './img/bottle/bottle-process1.png'
import process2 from './img/bottle/bottle-process2.png'
import process3 from './img/bottle/bottle-process3.png'
import process4 from './img/bottle/bottle-process4.png'
import process5 from './img/bottle/bottle-process5.png'
import bottle from './img/bottle/bd_bottle.png'
import pic from './img/bottle/bottle-pic.jpg'

export class Bottle extends React.Component {

    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div>
                <Bounce top><h1>Bottle</h1></Bounce>
                <Bounce left delay={50}>
                    <p>Art piece for Moffitt Library's #MyLastTrash Undergraduate Student Art Exhibit.<br/>
                    Part of the University of California's Zero Waste initiative.<br/></p>
                </Bounce>
                <Bounce left delay={100}>
                    <p className="scope">
                        <b>SCOPE:</b> UC Berkeley public library<br/>
                        <b>TIME:</b> 3 days<br/>
                        <b>ROLE:</b> graphic designer
                    </p>
                </Bounce>
                <Bounce right delay={150}>
                    <subtitle className="background">
                        Background
                    </subtitle>
                    <p className="background bg-writeup">
                        Zero Waste is a University of California initiative to reduce waste across campuses and achieve zero waste by 2020. Since the fall of 2018, UC Berkeley's Moffitt Library has hosted an art exhibit themed <bottle>#MyLastTrash</bottle> in support of the initiative.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Reducing waste with reusable water bottles.
                    </subtitle>
                    <p className="writeup">
                        I was inspired by <a target="_blank" className="bottle" href="https://www.youtube.com/watch?v=5qx2WFpNTPs&feature=youtu.be&t=4m26s">this video</a> produced by the University of California in partnership with Vox, which talks about using reusable water bottles instead of plastic bottles to cut down on waste. After watching the video and doing more research, I knew I wanted to create a piece that emphasizes the amount of waste that could be reduced with reusable bottles.
                    </p>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Process
                    </subtitle>
                    <p className="writeup">
                        I started by creating water bottle assets on Illustrator. First, I made a plastic water bottle. Then, I envelope warped the water bottle into varying shapes and sizes in order to give some bottles a crushed effect. Afterwards, I created a sleek reusable water bottle to contrast the crushed plastic bottles.
                    </p>
                    <div className="proj-collection">
                        <div style={{display: "inline-block"}}>
                        <img data-sr="enter bottom move 50px wait 0.2s" class="proj-img20 proj-shadow" src={process1}/>
                        <img data-sr="enter bottom move 50px wait 0.25s" class="proj-img20 proj-shadow" src={process2}/>
                        <img data-sr="enter bottom move 50px wait 0.3s" class="proj-img20 proj-shadow" src={process3}/>
                        </div>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <p className="writeup">
                    To juxtapose the reusable and plastic bottles' effects on the environment, I grouped several plastic bottles together on one side and the single reusable on the other. I then added highlights and shadows for more dimensionality, removed the plastic bottle outlines to make the overall design cleaner, and made the background blue-green to coincide with the zero waste theme.
                    </p>
                    <div className="proj-collection">
                        <img data-sr="enter bottom move 50px wait 0.2s" className="proj-img40 proj-shadow" src={process4}/>
                        <img data-sr="enter bottom move 50px wait 0.25s" className="proj-img40 proj-shadow" src={process5}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <p className="writeup">
                        Afterwards, I adjusted the color and contrast on Photoshop to get the end result.
                    </p>
                    <div className="proj-collection">
                        <div style={{display: "inline-block"}}>
                            <img data-sr="enter bottom move 50px wait 0.2s" className="proj-photo proj-shadow" src={bottle}/>
                        </div>
                    </div>
                    <div className="proj-collection">
                        <img data-sr="enter bottom move 50px wait 0.2s" className="proj-photo proj-shadow" src={pic}/>
                    </div>
                </Bounce>
            </div>
        );
    }
}

export default Bottle;