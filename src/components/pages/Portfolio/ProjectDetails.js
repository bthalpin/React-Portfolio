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
            <div className={`projectPicture ${projectData[id].class} ${large}`} onClick={enlarge}>

            </div>
        
                            <h3>{projectData[id].name}</h3>
                            

        
        </div>
         <div className='projectInfo'>  
     
            <div className='projectSummary'>
                <p>jdksfndsk jnsdjkfn sjfn jkdsfn kjdfnkjsdfnkj nsdjkdfnkjsdnf kjnsdfkjnsdkj fnsdkj fnsdkjfn kjsdn fjsdfnsk jdnsdf
                </p>
            </div>
            <div className='projectTech'>
                <p>dskjnsdkjnf lksdnlkdsnlk nfskln dklnfklsnflsnd klnf dsklnflkdsnfklsn kldfnlksdnflknsdlkfnkdlsnflksdn</p>
            </div>     

        
        </div>

         </div>   
         </div>
        )
}

export default ProjectDetails;