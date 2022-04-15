import React from 'react';
import Nav from './Nav';
import './header.css';
function Header ({setPage}) {
    const navigationLinks = ['About','Portfolio','Contact','Resume']
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