import React from 'react';
import { NavLink } from 'react-router-dom';
function Nav ({navLink}) {

    return (
        <NavLink className={({isActive})=>isActive?'navLink selected':'navLink'} to={navLink==='About Me'?'/':`/${navLink}/`} >
            {navLink}
        </NavLink>
    )
}

export default Nav;