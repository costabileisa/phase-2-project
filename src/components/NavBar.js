import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const style = {
        background: "#FFA5AD",
    }
    return (
        <div className="navbar">
            <NavLink 
            exact to="/"
            activeStyle={style}
            >
            Home
            </NavLink>
            <NavLink 
            exact to="images"
            activeStyle={style}
            >
            Images
            </NavLink>
            <NavLink
            exact to="breeds"
            activeStyle={style}
            >
            Breeds
            </NavLink>
        </div>
    )
}

export default NavBar