import React from "react";  
import { Link } from "react-router-dom";
export default function NavBarComp() {
  return (
    <>
    
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/experience">experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/give">Give Testimonials</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="*">Page Not Found </Link></li>
      </ul>
    </>
  );
}
