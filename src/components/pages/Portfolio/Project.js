import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './projects.css';

function Project ({projectInfo,id}) {
    const [linkVisible,setLinkVisible] = useState(false)
// 
// FOR FUTURE DEVELOPMENT
// 
    // ,setPage,setProjectId,id
    // const getDetails = (id) => {
    //     setProjectId(id);
    //     setPage('ProjectDetails');
    // }
    
    return(   
        <Link to={`/Project/${id}`}>

        <div className={`projectCard ${projectInfo.class}`} >  
            <section className="projectCardInfo">
                    
                    {/* Hides the links if card is not hovered or clicked on(in mobile) */}
                    {/* {linkVisible?
                    <div className='projectLinkContainer'>
                    <div>
                    <a className="deployLink" href={projectInfo.deployed} target="blank">                               
                    <h2 className='projectDeployed'>{projectInfo.name}</h2>
                    </a>
                    
                    </div>
                    <div>
                    <a className="codeLink" href={projectInfo.github} target="blank">
                    <img className='projectCode' src="/images/github-logo.png" alt="GitHub Logo"></img>
                    </a>
                    
                    </div>
                    </div>
                    
                : */}
                    <div>
                        <h2 className='projectName'>{projectInfo.name}</h2>
                    </div>
                    {/* } */}
            </section>
       
        </div>
                </Link>
        )
}

export default Project;