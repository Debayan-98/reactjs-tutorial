import React,{useEffect, useState} from 'react'

export default function Hookuseeffect() {
      const [count,setCount]=useState(0)
      

     useEffect(()=>{
       if(count>= 1){
        document.title= `Facebook (${count})`
      }else{
         document.title= `Facebook`
      }
     })
    console.log('out side ');
  return (
    <div>
        <h1>Time count Down</h1>
      <h1>{count}</h1>
      <button className='btn' onClick={()=>{
          setCount(count + 1)
      }}>Click me</button>
    </div>
  )
}