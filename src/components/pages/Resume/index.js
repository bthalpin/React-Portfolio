import React from 'react';
import './resume.css';
import {skills} from './resumeData';
function Resume () {
    return (
        <div className="resumePage">
            <div className="resumeBackground">

                <div className="resumeContainer">
                    <a className="resumeLink" href="/documents/Brian-Halpin-Resume-2022.pdf" download>
                        
                        <img src="/images/Resume.png" alt="Resume"></img>
                        <p>DOWNLOAD RESUME</p>
                        
                    </a>

                </div>
            </div>

            {/* Skills mapped from resumeData.js */}
            <div className="skillContainer">
                <div className="skills">
                    <h2>Technical Skills</h2>
                    <p className="skill"><span className="skillLevel">Front-End:</span> HTML, CSS, Bootstrap, JavaScript, jQuery, React</p>
                    <p className="skill"><span className="skillLevel">Back-End:</span> Node, Express, Django, Flask</p>
                    <p className="skill"><span className="skillLevel">Database:</span> MongoDB, Mongoose, GraphQL, MySQL, Sequelize, Postgres, Knex </p>
                    <p className="skill"><span className="skillLevel">Other:</span> Python, JSON Web Tokens, bcrypt, socket.io, Heroku, Git, Bash, Microsoft Office Suite</p>
                    {/* <ul>
                        {skills.front.map((skill,index)=>{
                            let background='darkSkill'
                            if (index%2!==0){
                                background=''
                            }
                            return <li className={background} key={index}>{skill}</li>
                        })}
                        
                    </ul> */}
                </div>
                {/* <div className="skills">
                    <h2>Back-end Skills</h2>
                    <ul>
                        {skills.back.map((skill,index)=>{
                            let background='darkSkill'
                            if (index%2!==0){
                                background=''
                            }
                            return <li className={background} key={index}>{skill}</li>
                        })}
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default Resume;