import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Portfolio, Contact, Resume,ProjectDetails } from './components/pages';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App () {
  
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