import React from 'react';
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ background: "#3a4664" }}
    >
      <a href="/" className="navbar-brand m-2">
        <h2 className="" style={{ color: "#aad6ec" }}>
          React Router
        </h2>
      </a>

      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <NavLink to="/home" className="nav-link text-light">
            Home
          </NavLink>
        </li>

        <li className="nav-item mx-3">
          <NavLink to="/about" className="nav-link text-light">
            About Us
          </NavLink>
        </li>

        <li className="nav-item mx-3">
          <NavLink to="/blog" className="nav-link text-light text-center">
            Blog
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" className="nav-link text-light text-center">
            Services
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="nav-link text-light text-center">
            Contact Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/FAQ" className="nav-link text-light text-center">
            FAQ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar