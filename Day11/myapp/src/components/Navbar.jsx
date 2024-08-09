import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () =>{
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark text-light">
          <NavLink
            className="navbar-brand text-light mx-3 fw-bold"
            to="/navbar"
          >
            React Router
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item mx-4">
                <NavLink className="nav-link text-light" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item mx-4">
                <NavLink className="nav-link text-light" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link text-light" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link text-light" to="/service">
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}
export default Navbar;