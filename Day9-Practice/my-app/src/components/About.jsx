import React from 'react'
import { useNavigate } from 'react-router-dom';


const About = () => {

const nav = useNavigate();

 const Forward = () => {
   nav(+1);
 };
 
  return (
    <div>
      <h1 className="text-center my-5">About Us!!</h1>

      <center>
        <button
          className="btn btn-dark fw-bold mx-3"
          onClick={() => {
            nav("/contact");
          }}
        >
          Contact Us
        </button>
        <button
          className="btn btn-danger fw-bold mx-3"
          onClick={() => {
            nav("/home");
          }}
        >
          Home
        </button>

        <button
          className="btn btn-success fw-bold mx-3"
          onClick={() => {
            nav("/services");
          }}
        >
          Services
        </button>

        <button
          className="btn btn-dark fw-bold mx-3"
          onClick={() => {
            nav("/blog");
          }}
        >
          Blog
        </button>

        <button
          className="btn btn-outline-danger fw-bold mx-3"
          onClick={() => {
            Forward();
          }}
        >
          Forward
        </button>
      </center>
    </div>
  );
}

export default About
