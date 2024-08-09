import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const nav = useNavigate();

  function Blog() {
    let { id } = useParams();
    return <p>my unique id is {id}</p>;
  }
  return (
    <div>
      <h1 className="text-center my-5">This is Blog Section!!!</h1>
      <center>
        <button className='btn btn-info fw-bold' onClick={()=>{nav("/about");}}>About</button>
      </center>
    </div>
  );
}

export default Blog
