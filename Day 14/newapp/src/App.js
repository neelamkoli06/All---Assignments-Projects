import React, { useReducer } from 'react'

const App = () =>{

  const reducer = (state,action) =>{

    switch(action.type){

      case 'Inc':
      return{count:state.count+1}

      case 'Dec':
        return{count:state.count-1}

      default:
        return state.count
    }
  }


  const initialState = {count:0}

  const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <>
      <center>
        <h1>Initial State - {state.count}</h1>
        <button
          onClick={() => {
            dispatch({ type: "Inc" });
          }}
        >
          INC
        </button>
        <b>&nbsp;{state.count} &nbsp;</b> {/* &bsp used for space */}
        <button onClick={() => dispatch({ type: "Dec" })}>DEC</button>
      </center>
    </>
  );
}
export default App;