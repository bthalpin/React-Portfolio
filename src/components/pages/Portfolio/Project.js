import React, {useState} from 'react';
import './projects.css';

function Project ({projectInfo}) {
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
        <div className={`projectCard ${projectInfo.class}`} onClick={()=>setLinkVisible(true)} onMouseOver={()=>setLinkVisible(true)} onMouseOut={()=>setLinkVisible(false)}>  
            <section className="projectCardInfo">
                    
                    {linkVisible?
                    <div className='projectLinkContainer'>
                        <div>
                        <a className="deployLink" href={projectInfo.deployed} target="blank">
                            
                        <h2 className='projectDeployed'>{projectInfo.name}</h2>
                        </a>
                            
                        </div>
                        <div>
                        <a className="codeLink" href={projectInfo.github} target="blank">

                        <img className='projectCode' src="/images/github-logo.png"></img>
                        </a>

                        </div>
                    </div>
                    
                    :
                    <div>
                        <h2 className='projectName'>{projectInfo.name}</h2>

                    </div>
                    }
            </section>
       
        </div>
        )
}

export default Project;