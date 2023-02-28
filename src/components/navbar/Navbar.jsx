import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/style.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="brand-title">Kalex</div>
        <Link to="/" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </Link>
        <div className="navbar-links">
          <ul id="navbar">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">List of blogs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/login">login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
