import React, { useMemo, useState } from 'react'

const Memo = () => {

    const [count,setCount] = useState(0)
    const [item,setItem] = useState(1)

    const demo1 = () =>{
        console.log("demo1 function called")
    }
    const demo2 = () =>{
        console.log("demo2 function called")
    }
    const demo = useMemo(() =>{
        console.log('Hello useMemo function called')
        return count + 5;
    },[count])
  return (
    <div>
        <h1>UseMemo</h1>
        <h1>Initial Count: {count}</h1>
        <h1>Initial Item: {item}</h1>

        <button onClick={()=> setCount(count+1)}>Update Count</button>
        <button onClick={()=>setItem(item+1)}>Update Item</button>

        <h1>{demo}</h1>

    </div>
  )
}

export default Memo