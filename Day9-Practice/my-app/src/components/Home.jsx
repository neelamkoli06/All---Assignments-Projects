import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nav = useNavigate();

  return (
    <div>
        <h1 className="text-center my-4 p-4 text-dark">Home Page</h1>
        <center>
          <button className='btn btn-info fw-bold' onClick={()=>{nav('/about')}}>About</button>
        </center>
    </div>
  );
}

export default Home;
