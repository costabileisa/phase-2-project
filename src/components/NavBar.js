import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <NavLink 
            exact to="/"
            activeStyle={{background: "#4D2A34", color: "#FFF4F9"}}
            >
                Home
            </NavLink>
            <NavLink 
            exact to="images"
            activeStyle={{background: "#4D2A34", color: "#FFF4F9"}}
            >
                Images
            </NavLink>
        </div>
    )
}

export default NavBar