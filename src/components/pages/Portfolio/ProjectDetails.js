import React from 'react';
import './projects.css';
import { projectData } from './projectData';
import {useParams} from 'react-router-dom';

function ProjectDetails () {
    const {id} =useParams()
    
    return(
        <div>
            
            <h2 className="projectTitle">
                 {projectData[id].name}
            </h2>

            <div className="projectDetailContainer">
                <div className='projectDetailCard'>  
                    <a href={projectData[id].deployed}>
                        <div className={`projectPicture ${projectData[id].class}`}></div>
                    </a>
        
                    <div className="projectBtnContainer">
                        <div>
                            <button onClick={()=>window.location=projectData[id].deployed} className="projectBtn">Demo</button>
                        </div>

                        <div>
                            <button onClick={()=>window.location=projectData[id].github} className="projectBtn">Code</button>
                        </div>
                    </div>
                </div>

                <div className='projectInfo'>  
                    <div className='projectSummary'>
                        <p>{projectData[id].summary}</p>
                        <p id="disclaimer">{projectData[id].disclaimer}</p>
                    </div>

                    <div className='projectTech'>
                        <h3>Technology Used:</h3>
                        <div className="techList">
                            <p>{projectData[id].technology}</p>
                        </div>
                    </div>     
                </div>
            </div>   
        </div>
        )
}

export default ProjectDetails;