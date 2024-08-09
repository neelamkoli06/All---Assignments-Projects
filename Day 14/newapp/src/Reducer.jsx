import React, { useReducer } from 'react'


const initialTodos = () =>[
    {
        id:1,
        title:'Todo1',
        complete:'false',
    },
    {
        id:2,
        title:'Todo2',
        complete:'false',
    },
];


const Reducer = (state,action) => {
    switch(action.type){
        case "COMPLETE":
            return state.map((todo =>{
                if(todo.id === action.id){
                    return {...todo,complete: !todo.complete};
                }else{
                    return todo;
                }
            })
            default:
                return state;
    }
    }
    function Todos(){
        const [todos,dispatch] = useReducer(reducer,initialTodos);
    }

  return (
    <div>
        {
            todos.map((todo)=>(

            <div key={todo.id}>
                <label type="checkbox" checked={todos.complete} onChange={()=> handlecomplete(todo)}>
                    {todo.title}
                </label>
            </div>

            ))
        }


    </div>
  )
}

export default Reducer