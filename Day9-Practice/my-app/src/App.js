import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import Services from "./components/services";
import Navbar from './Navbar';
import FAQ from './components/FAQ';



const App = () =>{
  return (
    <>
      {/* <h1>welcome to react router</h1> */}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
        </Routes>
      </Router>
    </>
  );
    
}

export default App;
