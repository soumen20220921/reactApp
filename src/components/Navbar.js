import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    
  return (
    
    
        <ul className="navbar-list" >
        <li>
            <NavLink
              className="navbar-link"
              
              to="/WtWy">
              Vision
            </NavLink>
          </li>
          <li >
            <NavLink
              className="navbar-link"
              
              to="/HeAssistance">
              HeAssistant
            </NavLink>
          </li>
         
          
          
          <li >
            <NavLink
              className="navbar-link"
              
              to="/services">
              Services
            </NavLink>
          </li>
          <li >
            <NavLink
              className="navbar-link"
              
              to="/news">
              News
            </NavLink>
          </li>
          <li >
            <NavLink
              className="navbar-link"
              
              to="/teams">
              Team
            </NavLink>
          </li>
          <li >
            <NavLink
              className="navbar-link"
              
              to="/getStarted">
              Get-Started
            </NavLink>
          </li>
        </ul>
        
      
      
   
  )
}

export default Navbar
