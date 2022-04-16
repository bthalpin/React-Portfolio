import React from 'react';
import './projects.css';

function Project ({projectInfo,setPage,setProjectId,id}) {
    const getDetails = (id) => {
        setProjectId(id);
        setPage('ProjectDetails');
    }
    
    return(   
        <div className={`projectCard ${projectInfo.class}`} onClick={()=>getDetails(id)}>  
            <section className="projectCardInfo">
                
            
                    <h2 >{projectInfo.name}</h2>

                

            </section>
       
        </div>
        )
}

export default Project;