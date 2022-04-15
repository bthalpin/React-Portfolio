import React, { useState } from 'react';
import { About, Projects, Contact, Resume } from './pages';
import Header from './Header/Header';

function Portfolio () {
    const [page,setPage] = useState('About')
    const renderPage = () => {
        switch (page) {
            case 'About':
                return <About />
            case 'Portfolio':
                return <Projects />
            case 'Contact':
                return <Contact />
            case 'Resume':
                return <Resume />
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