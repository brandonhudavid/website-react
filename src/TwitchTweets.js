import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Home.css';
import logo from './img/logo.png';
import data from './img/twitchtweets/twitchtweets_data.png';
import sketches from './img/twitchtweets/sketches.jpeg';
import structure from './img/twitchtweets/structure.jpeg';
import midfi from './img/twitchtweets/midfi.png';
import hifi from './img/twitchtweets/hifi.png';
import mizkif_play from './img/twitchtweets/mizkif_play.png';
import ludwig_play from './img/twitchtweets/ludwig_play.png';
import { BrowserRouter as Route, Link } from "react-router-dom";

export class TwitchTweets extends React.Component {

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
                        <Link to={process.env.PUBLIC_URL + "/art"}>
                            <a className={"unselected clickable"}>Art&amp;Design</a>
                        </Link>
                    </nav>
                </header>
                <Bounce top><h1>Twitch Tweets</h1></Bounce>
                <Bounce left delay={50}>
                    <p>React web game testing your knowledge of famous Twitch streamers.<br/>
                    Guess who tweeted what. Prove that you are your favorite streamer's biggest fan.<br/></p>
                </Bounce>
                <Bounce left delay={100}>
                    <p className="scope">
                        <b>SCOPE:</b> Full stack React web development<br/>
                        <b>TIME:</b> 1 month<br/>
                        <b>ROLE:</b> web developer, backend developer, product designer<br/>
                        <br/>
                        <b>github repo:</b> <a target="_blank" className="twitchtweets" href="https://github.com/brandonhudavid/twitch-tweets-prod">click here</a><br/>
                        <b>figma:</b> <a target="_blank" className="twitchtweets" href="https://www.figma.com/file/Z2xSFHmbbBmTYyelOpdoj3/Twitch-Tweets?node-id=0%3A1&t=eih8kTS30v5Rb2hO-1">click here</a>
                    </p>
                </Bounce>
                <Bounce right delay={150}>
                    <subtitle className="background">
                        <div>
                            Background
                        </div>
                    </subtitle>
                    <div className="right-wrapper">
                    <p className="background bg-writeup">
                        <a className="twitchtweets" href="https://twitchtweets.com/" target="_blank">Twitch Tweets</a> is a web game that I created during winter break 2021 as an homage to the content creators I enjoy watching on Twitch, the world's premier livestreaming service.
                        <br/><br/>
                        Over the course of 3 days, the game was played 343,000+ times by 20,000+ unique visitors, received 12,000+ upvotes on Reddit, and was broadcasted by streamers with 50,000+ concurrent viewers.<br/>There are also videos featuring popular livestreamers <a target="_blank" className="twitchtweets" href="https://youtu.be/61iO6-UltpA?t=1573">Ludwig</a> and <a target="_blank" className="twitchtweets" href="https://www.youtube.com/watch?v=2xvTRIjHBNw&ab_channel=Mizkif">Mizkif</a> playing Twitch Tweets, amassing to 475,000+ views.
                        <br/><br/>
                        Click <b>below</b> to view the videos and get a closer look at some fun game stats.
                    </p>
                    </div>
                </Bounce>

                <Bounce left delay={200}>
                    <div className="proj-collection">
                    <a target="_blank" href="https://youtu.be/61iO6-UltpA?t=1573">
                        <img className="proj-img30 proj-shadow" src={ludwig_play}/>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/watch?v=2xvTRIjHBNw&ab_channel=Mizkif">
                    <img className="proj-img30 proj-shadow" src={mizkif_play}/>
                    </a>
                    </div>
                    <div className="proj-collection">
                        <a href={data} target="_blank">
                            <img className="proj-img40 proj-shadow" src={data}/>
                        </a>
                    </div>
                </Bounce>

                <Bounce left delay={200}>
                    <subtitle>
                        Inspired by streamers.
                    </subtitle>
                    <p className="writeup">
                        The game was largely inspired by a <a className="twitchtweets" href="https://www.youtube.com/watch?v=2e9c5jzxGVg&ab_channel=Northernlion" target="_blank">Twitch livestream</a> from content creator Northernlion. In the stream, he plays a web game where the player must determine a food dish's country of origin solely based off a picture and its listed ingredients. Seeing such a simple game resonate so deeply with a streamer and their audience inspired me to think of games that people across the livestreaming platform would enjoy.
                        <br/><br/>
                        One thought that came to mind was the running joke of an obsessive viewer being labeled as a "Parasocial Andy". From this idea, I decided on creating a game where players would test their knowledge of their favorite streamers based on anonymous Tweets.
                    </p>
                </Bounce>

                <Bounce left delay={200}>
                    <subtitle>
                        Low-fidelity design ideation.
                    </subtitle>
                    <p className="writeup">
                        I started the design process by drawing low fidelity mockups of the web game using paper and pen. My goal was to determine the best way of laying out the landing page and game screen. My initial idea was for players to type streamers' names in a search bar and select their guesses via a dropdown. I also sketched a multiple choice implementation, where players could click from a limited number of streamer choices shown on screen.
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={sketches}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Mid-fi and high-fi designs.
                    </subtitle>
                    <p className="writeup">
                        After the low-fidelity sketches, I went to Figma and created mid-fidelity grayscale wireframes of what I sketched. From the wireframes, I noticed several issues with thie dropdown implementation:
                        <br/><br/>
                        <div style={{paddingLeft:'28px'}}>
                        1.) The number of streamers available to guess from is not immediately clear.
                        <br/>
                        2.) Coming up with a streamer's name and typing it out requires a lot of effort from the player.
                        <br/><br/>
                        </div>
                        Acknowledging these two issues, I pivoted towards the multiple choice approach. I opted to show four choices rather than just two, making the game more challenging and less coin-flippy.
                        <br/><br/>
                        And then came the hi-fidelity spectacles. I wanted to stay true to the Twitch purple and Twitter blue, so I incorporated both of them into the site's color scheme. I also minimized the number of CTAs on each page to make the game progression as obvious as possible.
                        <br/><br/>
                        You can check out the designs via this <a target="_blank" className="twitchtweets" href="https://www.figma.com/file/Z2xSFHmbbBmTYyelOpdoj3/Twitch-Tweets?node-id=0%3A1&t=eih8kTS30v5Rb2hO-1">Figma file.</a>
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img30 proj-shadow" src={midfi}/>
                        <img className="proj-img30 proj-shadow" src={hifi}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle>
                        Developing the game.
                    </subtitle>
                    <p className="writeup">
                        To bring this game to life, I used React for the frontend and Firestore to track game analytics.
                        <br/><br/>
                        I stored Tweet data locally in an object containing Tweet id, the streamer's name, their Twitter handle, the text of the Tweet, and the datetime the Tweet was posted. I also used localStorage to store user-specific data (ie. high score, Tweets seen) on the user's browser. Stats about total games played and correct/incorrect rate for each Tweet are stored via Firestore.
                        <br/><br/>
                        You can check out the source code via this <a target="_blank" className="twitchtweets" href="https://github.com/brandonhudavid/twitch-tweets-prod">GitHub repository.</a>
                    </p>
                    <div className="proj-collection">
                        <img className="proj-img40 proj-shadow" src={structure}/>
                    </div>
                </Bounce>
                <Bounce left delay={200}>
                    <subtitle className="background">
                        Acknowledgments
                    </subtitle>
                    <div className="right-wrapper">
                    <p className="background bg-writeup">
                        Thank you to Ludwig, Mizkif, and all the other streamers that played Twitch Tweets! And thank you to Brian He, Raymond Guo, Richard Chen, and Lawrence Zhao for helping me playtest this game and find areas for improvement.
                    </p>
                    </div>
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

export default TwitchTweets;
