import React from 'react';
import './projects.css';

function Project ({projectInfo,setPage,setProjectId,id}) {
    const getDetails = (id) => {
        setProjectId(id);
        setPage('ProjectDetails');
    }
    const idNames = ['one','two','three']
    return(   
        <div className='projectCard' id={idNames[id]} onClick={()=>getDetails(id)}>  
            <section className="">
                <section className="" >
            
                    <h2 >{projectInfo.name}</h2>

                </section>

            </section>
       
        </div>
        )
}

export default Project;