import React,{useEffect, useState} from 'react'

export default function Hookuseeffect() {
      const [count,setCount]=useState(0)
      
    useEffect(()=>{
        //console.log('hello use effect');
        
        document.title=`Chat (${count})`
        
    })

    // how to use use effect hooks conditionally
    //we cant use condition out side of the hooks but we use inside the hooks
    // useEffect(()=>{
    //   if(count>= 1){
    //     document.title= `WhatsApp (${count})`
    //   }else{
    //     document.title= `WhatsApp`
    //   }
    // })
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