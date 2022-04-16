import React from 'react';

function Nav ({navLink,page,setPage}) {

    return (
        <div className={`navLink ${navLink===page?'selected':''}`} onClick={()=>setPage(navLink)}>
            {navLink}
        </div>
    )
}

export default Nav;