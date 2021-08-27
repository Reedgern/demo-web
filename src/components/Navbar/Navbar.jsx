import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <NavLink to={'/profile'}>Profile</NavLink>
            {/*<NavLink to={'/dialogs'}>Dialogs</NavLink>*/}
            <NavLink to={'/users'}>Users</NavLink>
        </div>
    )
};

export default Navbar;