import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Service from "./components/Service";
import App_Layout from "./components/App_Layout";
import Page_Not_Found from "./components/PageNotFound";
import Navbar from "./components/Navbar";


const App =() =>{
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App_Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/service" element={<Service />}></Route>
              <Route path="*" element={<Page_Not_Found/>}></Route>
          </Route> {/* nested routing */}
        </Routes>
      </Router>
    </>
  );
}

export default App;


