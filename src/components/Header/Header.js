import React from 'react';
import Nav from './Nav';
import './header.css';
import {navigationLinks} from './navigationData';

function Header ({page,setPage}) {

    return (
        <div className="navContainer">
            {navigationLinks.map((navLink,index)=>
                <div key={index}>
                    <Nav navLink={navLink} page={page} setPage={setPage} />
                </div>
            )}
        </div>
    )
}

export default Header;