import React, { useState } from 'react';
import { About, Portfolio, ProjectDetails, Contact, Resume } from './pages';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function Main () {
    const [page,setPage] = useState('About');
    const [projectId,setProjectId] = useState(0);

    const renderPage = () => {
        switch (page) {
            case 'About':
                return <About />
            case 'Portfolio':
                return <Portfolio setPage={setPage} setProjectId={setProjectId}/>
            case 'ProjectDetails':
                return <ProjectDetails projectId={projectId} setPage={setPage} />
            case 'Contact':
                return <Contact />
            case 'Resume':
                return <Resume />
            default:
                return <About />

        }
    }
    return (
        <div className="main">
           <Header page={page} setPage={setPage}/>
           {renderPage()}
           <Footer />
        </div>
    )
}

export default Main;