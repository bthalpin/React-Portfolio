import React, { useState } from 'react';
import { About, Projects, ProjectDetails, Contact, Resume } from './pages';
import Header from './Header/Header';

function Portfolio () {
    const [page,setPage] = useState('About');
    const [projectId,setProjectId] = useState(0);

    const renderPage = () => {
        switch (page) {
            case 'About':
                return <About />
            case 'Portfolio':
                return <Projects setPage={setPage} setProjectId={setProjectId}/>
            case 'ProjectDetails':
                return <ProjectDetails projectId={projectId} />
            case 'Contact':
                return <Contact />
            case 'Resume':
                return <Resume />
            default:
                return <About />

        }
    }
    return (
        <div>
           <Header setPage={setPage}/>
           {renderPage()}
        </div>
    )
}

export default Portfolio;