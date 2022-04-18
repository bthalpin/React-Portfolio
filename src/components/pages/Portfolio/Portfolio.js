import React from 'react';
import Project from './Project';
import {projectData} from './projectData';
import './projects.css';

function Portfolio ({setPage,setProjectId}) {
    
    return (
        <div className='projectContainer' >
            {projectData.map((projectInfo,index)=>
                <div key={index}>
                    <Project projectInfo={projectInfo} setPage={setPage} setProjectId={setProjectId} id={index}/>
                </div>
                )}
        </div>
    )
}

export default Portfolio;