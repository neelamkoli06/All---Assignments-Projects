import React, { useRef } from 'react'

const UseRef = () => {

    const data = useRef(null);
    const Getdata = () =>{
        // console.log(data);  //current object
        // console.log(data.current) //input email
        console.log(data.current.value)  //exect value we entered in the input tag.



        data.current.style.backgroundColor = 'orange';
        // data.current.value = 'Abc' //fixed the default value
    }
  return (
    <div>
      <label htmlFor="" className='my-3 mx-3'>Enter Your Email:</label>
      <br />
      <input type="email" ref={data} placeholder='Enter your Email here..'className='mx-3' onChange={()=>{Getdata();}}/>
    </div>
  )
}

export default UseRef
