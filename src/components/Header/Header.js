import React from 'react';
import Nav from './Nav';
import './header.css';
import {navigationLinks} from './navigationData';

function Header ({setPage}) {

    return (
        <div className="navContainer">
            {navigationLinks.map((navItem,index)=>
                <div key={index}>
                    <Nav navItem={navItem} setPage={setPage} />
                </div>
            )}
        </div>
    )
}

export default Header;