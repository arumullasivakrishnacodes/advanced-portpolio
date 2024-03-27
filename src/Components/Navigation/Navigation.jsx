import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";

function Navigation () {
    return (
      <div className="Nav-menu-container">
        <NavLink to="/" className="d-flex flex-column justify-content-center align-items-center single-menu menu-home">
          <i class="bi bi-house"></i>
          <p className="m-0">Home</p>
        </NavLink>

        <NavLink to="/experience" className="d-flex flex-column justify-content-center align-items-center single-menu menu-experience">
        <i class="bi bi-lightbulb"></i>
          <p className="m-0">Experience</p>
        </NavLink>

        <NavLink to="/skills" className="d-flex flex-column justify-content-center align-items-center single-menu menu-skills">
        <i class="bi bi-lamp"></i>
          <p className="m-0">Skills</p>
        </NavLink>

        <NavLink to="/certifications" className="d-flex flex-column justify-content-center align-items-center single-menu menu-certifications">
          <i class="bi bi-book"></i>
          <p className="m-0">Certification</p>
        </NavLink>

        <NavLink to="/projects" className="d-flex flex-column justify-content-center align-items-center single-menu menu-projects">
        <i class="bi bi-cast"></i>
          <p className="m-0">Projects</p>
        </NavLink>

        <NavLink to="/education" className="d-flex flex-column justify-content-center align-items-center single-menu menu-education">
        <i class="bi bi-gear-wide-connected"></i>
          <p className="m-0">Education</p>
        </NavLink>
      </div>
    );
}

export default Navigation;