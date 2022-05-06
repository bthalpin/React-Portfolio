import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Portfolio, Contact, Resume,ProjectDetails } from './components/pages';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App () {
    const [page,setPage] = useState('About Me');

    // 
    // FOR FUTURE DEVELOPMENT
    // 
    const [projectId,setProjectId] = useState(0);
    
    // Returns component to load depending on the page selected
    const renderPage = () => {
        switch (page) {
            case 'About Me':
                return <About />
            case 'Portfolio':
                return <Portfolio setPage={setPage} projectId={projectId} setProjectId={setProjectId}/>
            case 'Contact':
                return <Contact />
            case 'Resume':
                return <Resume />
            default:
                return <About />
                 
            // 
            // FOR FUTURE DEVELOPMENT
            //     
            // case 'ProjectDetails':
            //     return <ProjectDetails projectId={projectId} setPage={setPage} />
        }
    }
    return (
        <div className="main">
            <Router>
            <Header />
                <Routes>
                    <Route 
                        path='/'
                        element={<About />}
                    />
                    <Route 
                        path='/Portfolio/'
                        element={<Portfolio />}
                    />
                    <Route 
                        path='/Contact/'
                        element={<Contact />}
                    />
                    <Route 
                        path='/Resume/'
                        element={<Resume />}
                    />
                    <Route 
                        path='/Project/:id'
                        element={<ProjectDetails />}
                    />
                    <Route 
                        path='*'
                        element={<About />}
                    />
                </Routes>
            </Router>
           
           <Footer />
        </div>
    )
}

export default App;