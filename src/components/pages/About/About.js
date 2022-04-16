import React from 'react';
import './about.css';

function About () {
    
    return (
        <div className="aboutContainer">
            <div className="portraitContainer">
                <div className="portrait">
                    <img src='/images/Brian-portrait.png' alt="Brian Halpin portrait"></img>
                </div>
                
            </div>
            <section>
                    <p>Hi, I'm</p> 
                    <p id="name">Brian Halpin</p> 
                    <p id="statement">
                        I am a full stack software developer specializing in MERN stack.  
                        Since the moment I was exposed to programming, it was all I ever wanted to do.  
                        I have always had a passion for problem solving, but thought my love of logic 
                        puzzles would be something I would only ever do as a hobby. Software development 
                        has given me an avenue to not only do what I love, but also to engage me and 
                        challenge me to always improve my skills.
                    </p>    

                </section>
        </div>
    )
}

export default About;