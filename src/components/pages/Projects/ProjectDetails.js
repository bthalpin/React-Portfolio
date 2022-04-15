import React from 'react';
import './projects.css';
import { projectData } from './projectData';

function ProjectDetails ({projectId}) {
     return(
         <div className="projectDetailContainer">
         <div className='projectCard detail'>  
     
        
                            <h3>{projectData[projectId].name}</h3>
                            

        
        </div>
         <div className='projectCard detail'>  
     
        
                            <h3>{projectData[projectId].name}</h3>
                            

        
        </div>

         </div>   
        )
}

export default ProjectDetails;