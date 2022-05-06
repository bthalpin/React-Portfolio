// 
// 
// 
// FOR FUTURE DEVELOPMENT
// 
// 
// 

import React, {useState} from 'react';
import './projects.css';
import { projectData } from './projectData';
import {useParams} from 'react-router-dom';
function ProjectDetails () {
    const {id} =useParams()
    const [large,setLarge] = useState('')
    const enlarge = () => {
        large===''?setLarge('large'):setLarge('');
    }
    return(
         <div>
             <h2 className="projectTitle">
                 {projectData[id].name}
             </h2>
         <div className="projectDetailContainer">
         <div className='projectDetailCard'>  
         <a href={projectData[id].deployed}>
            <div className={`projectPicture ${projectData[id].class}`}>

            </div>

         </a>
        
                            
                            

        
        </div>
         <div className='projectInfo'>  
     
            <div className='projectSummary'>
                <p>{projectData[id].summary}
                </p>
            </div>
            <div className='projectTech'>
                <h3>Technology Used:</h3>
                <div className="techList">
                    <p>{projectData[id].technology}</p>
                {/* <ul>
                {projectData[id].technology.map((tech,index)=>{
                    return (
                        <li key={index}>{tech}</li>
                    )
                })}
                </ul> */}

                </div>
            </div>     

        
        </div>

         </div>   
         </div>
        )
}

export default ProjectDetails;