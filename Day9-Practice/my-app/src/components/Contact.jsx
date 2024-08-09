import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Contact = () => {
  const nav = useNavigate();
  
  const Back = () =>{
    nav(-1)
  }
  return (
    <div>
      <h1 className='text-center my-5'>Contact us for more query!!!</h1>

      <center>
        <button className='btn btn-outline-dark fw-bold mx-3'onClick={()=>{Back()}}>Back</button>
       
        <button className='btn btn-outline-info fw-bold mx-3' onClick={()=>{nav('/about')}}>About</button>
      </center>
    </div>
  )
}

export default Contact
