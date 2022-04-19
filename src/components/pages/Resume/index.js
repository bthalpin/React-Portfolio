import React from 'react';
import './resume.css';

function Resume () {
    
    return (
        <div>
            <div className="resumeBackground">

            <div className="resumeContainer">
                <a className="resumeLink" href="/documents/Brian-Halpin-Resume-2022.pdf" download>
                    {/* <div className=""> */}
                            <img src="/images/Resume.png" alt="Resume"></img>
                        <p>DOWNLOAD RESUME</p>
                    {/* </div> */}
                </a>

            </div>
            </div>
            <div className="skillContainer">
                <div className="skills">
                    <h2>Front End</h2>
                    <ul>
                        <li>HTML,CSS,JS</li>
                        <li>REACT</li>
                        <li>Bootstrap</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="skills">
                    <h2>Back End</h2>
                </div>
            </div>
        </div>
    )
}

export default Resume;