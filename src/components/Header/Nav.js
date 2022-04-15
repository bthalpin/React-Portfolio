import React from 'react';

function Nav ({navItem,setPage}) {

    return (
        <div onClick={()=>setPage(navItem)}>
            {navItem}
        </div>
    )
}

export default Nav;