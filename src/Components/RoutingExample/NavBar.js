import React from "react";
import {Link,NavLink}from "react-router-dom"
import "./Anand.css"

const NavBar =()=>{
    return(
       <>
        <nav>
        <Link to="./">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Course">Course</Link>
        <NavLink to= "/Users" activeClassName="active" >Users</NavLink>
      </nav>
       </>
    )
}
export default NavBar;