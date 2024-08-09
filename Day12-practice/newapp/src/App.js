import React, { useEffect, useState } from 'react'

const App = () => {
  // ----------------------useState-------------------------------
  const [name,setName] = useState('Ninja-Hathori')

  const updateName = ()=>{
    setName('Amara')
  }
  const [count,setCount] = useState(0);

  const updateCount =() =>{
    setCount(count + 1);
  }
  const [color,setColor] = useState('red');
  const updateColor = () =>{
      setColor('Yellow')
  }
  // ----------------------------------useEffect--------------------------------

  // -------called  multiple times -------------------

  // useEffect(()=>{
  //   alert('I m a useEffect and i will be called multiple times.')
  // })


  // --------------useeffect called specific time passing the empty dependency

  // useEffect(()=>{
  //   alert('useEffect call using initial rendering')
  // },[])

  // -------------- useEffect called by passing the specific dependencies ------------------
  useEffect(()=>{
    alert("i will be called before changing the name")
  },[name])

  useEffect(()=>{
    setTimeout(()=>{
      setColor('blue');
    },3000)
    
    setTimeout(()=>{
      setColor('green')
    },5000)
  },[])

  // ------------------------------------------------------------------------------------
  return (
    <div>
    {/* -----------------------useState----------------------------------- */}
      <h1 className="mx-5 my-4">Hello {name} !!!</h1>
      <button
        className="btn btn-danger fw-bold mx-5"
        onClick={() => updateName()}
      >
        update state
      </button>
      <br />
      <br />
      <hr />
      <h1 className="mx-5">The count is {count}</h1>
      <button
        className="btn btn-info fw-bold mx-5"
        onClick={() => updateCount()}
      >
        update Count
      </button>
      <button
        className="btn btn-success fw-bold mx-3"
        onClick={() => setCount(count - 1)}
      >
        Reduce Count
      </button>
      <br />
      <br />
      <hr />
      <h1 className="mx-5" style={{ color: color }}>
        Color State
      </h1>
      <button
        className="btn btn-warning fw-bold mx-5"
        onClick={() => updateColor()}
      >
        Update Color
      </button>
      <br />
      <br />
      <hr />
      {/* -----------------------------------useEffect--------------------------------- */}






    </div>
  );
}

export default App
