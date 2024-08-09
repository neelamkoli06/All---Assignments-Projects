import React, { useEffect, useRef, useState } from 'react'

const Task = () => {

    const user1  = [{id:1,name:'ram',email:'ram@gmail.com',skill:'dancer'}]
    const user2  = [{id:2,name:'Shayam',email:'shyam@gmail.com',skill:'singer'}]
    const user3  = [{id:3,name:'Bharat',email:'bharat@gmail.com',skill:'artist'}]

    const [data,setdata] = useState(user1);
    console.log(data);

    const result = useRef(null)

    useEffect(()=>{
        alert('congrats You successfully fetch data!!')
    },[data])

    const getUser = ()=>{
        var a = result.current.value;
        if(a==='user1'){
            setdata(user1)
        }
        else if(a==='user2'){
            setdata(user2)
        }
        else{
            setdata(user3)
        }

    }


  return (
    <div>
    <h1 className='text-center'>Basic application task</h1>
    <label htmlFor="">Choose User</label>
    <select name="" id="" onChange={()=>getUser()} ref={result}>
        <option value="user1">user1</option>
        <option value="user2">user2</option>
        <option value="user3">user3</option>
    </select>

    {
        data.map((val) =>{
            return(
                <>
                    <h1>your Id:{val.id}</h1>
                    <h1>Your name:{val.name}</h1>
                    <h1>Your email:{val.email}</h1>
                    <h1>Your skill:{val.skill}</h1>

                </>
            )
        })
    }

      
    </div>
  )
}

export default Task
