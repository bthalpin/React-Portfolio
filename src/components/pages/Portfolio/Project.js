import React from 'react';
import './projects.css';

function Project ({projectInfo}) {

// 
// FOR FUTURE DEVELOPMENT
// 
    // ,setPage,setProjectId,id
    // const getDetails = (id) => {
    //     setProjectId(id);
    //     setPage('ProjectDetails');
    // }
    
    return(   
        <div className={`projectCard ${projectInfo.class}`} >  
            <section className="projectCardInfo">
                
                    <a href={projectInfo.deployed}>
                        
                    <h2 >{projectInfo.name}</h2>
                    </a>

                

            </section>
       
        </div>
        )
}

export default Project;