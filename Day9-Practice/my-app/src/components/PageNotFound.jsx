import React from 'react'
import { NavLink } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <>
      <h2
        className="text-danger text-center fw-bold"
        style={{ marginTop: "16%", fontSize: "48px" }}
      >
        Error: 404 Not Found
      </h2>
      <h4 className="text-center my-4 p-4 text-dark">
        {" "}
        <span className="" style={{ color: "gray" }}>
          Looking for something?
        </span>
        <br />{" "}
        <span className="" style={{ color: "gray" }}>
          The Web address you entered is not valid.
        </span>
        <br />
        <NavLink to="/home" className="mt-3 fw-bold text-success nav-link">
          {" "}
          Go To Home Page
        </NavLink>
      </h4>
    </>
  );
}
