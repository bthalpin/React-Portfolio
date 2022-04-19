import React from 'react';
import './resume.css';
import {skills} from './resumeData';
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
                    <h2>Front-end Skills</h2>
                    <ul>
                        {skills.front.map((skill,index)=>{
                            let background='darkSkill'
                            if (index%2===0){
                                background=''
                            }
                            return <li className={background} key={index}>{skill}</li>
                        })}
                        
                    </ul>
                </div>
                <div className="skills">
                    <h2>Back-end Skills</h2>
                    <ul>
                        {skills.back.map((skill,index)=>{
                            let background='darkSkill'
                            if (index%2===0){
                                background=''
                            }
                            return <li className={background} key={index}>{skill}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume;