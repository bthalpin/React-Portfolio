import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './projects.css';

function Project ({projectInfo,id}) {

    
    return(   
        <Link to={`/Project/${id}`}>

        <div className={`projectCard ${projectInfo.class}`} >  
            <section className="projectCardInfo">
                    
                    <div>
                        <h2 className='projectName'>{projectInfo.name}</h2>
                    </div>
                   
            </section>
       
        </div>
                </Link>
        )
}

export default Project;