import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";

function Navigation () {
    return (
      <div>
      <div className="Nav-menu-container d-none d-lg-flex">
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
      <div className="d-lg-none mobile-below-menu-main-container">
        <NavLink to="/" className="d-flex justify-content-center align-items-center home">
          <i class="bi bi-house"></i>
        </NavLink>
        <NavLink to="/experience" className="d-flex justify-content-center align-items-center experience">
          <i class="bi bi-lightbulb"></i>
        </NavLink>
        <NavLink to="/skills" className="d-flex justify-content-center align-items-center skills">
          <i class="bi bi-lamp"></i>
        </NavLink>
        <NavLink to="/certifications" className="d-flex justify-content-center align-items-center cerification">
          <i class="bi bi-book"></i>
        </NavLink>
        <NavLink to="/projects" className="d-flex justify-content-center align-items-center projects">
          <i class="bi bi-cast"></i>
        </NavLink>
        <NavLink to="/education" className="d-flex justify-content-center align-items-center education">
        <i class="bi bi-gear-wide-connected"></i>
        </NavLink>
      </div>
      <div className="d-lg-none about-main-section-container">

      </div>
      </div>
      
    );
}

export default Navigation;