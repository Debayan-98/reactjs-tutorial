import React, {useState, useEffect } from 'react'

export const TimeExample = () => {
    const[counttime,setCount]=useState(0);




    useEffect(()=>{
        //setTimeout is a callback function .First set count is function which pass a funtion through it that is count=count+1 .this count=count+1 first call in set count then set time out call .
        setTimeout(()=>{
            setCount((count)=> count+1)
        },1000)
    })


  return (
    <div>

        <h1>Set TimeExaample using useEffectHooks</h1>

        <h1>{counttime}</h1>
    </div>  
  )
}
