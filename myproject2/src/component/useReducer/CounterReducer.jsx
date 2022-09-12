import React, { useReducer } from 'react'

const initalstate=1;
const reducer=(state,action)=> {

    switch(action){
        case 'incriment':
             return state +1
        case 'decriment':
             return state -1
        default:
             return state     
                  }
}

export const CounterReducer = () => {
    const [count,dispatch]=useReducer(reducer,initalstate)
    return (
    <div>
        <h1>UseReducer</h1>
        <h1>Count: {count}</h1>
        <button onClick={()=>{dispatch('incriment')}}>Incriment</button>
        <button onClick={()=>{dispatch('decriment')}}>Decriment</button>
    </div>
  )
}

export default  CounterReducer