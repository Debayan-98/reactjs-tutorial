import React, { useState } from 'react'

export default function Objectusestate() {
    const [myobject,setObject]=useState({
        name:'Aditi gupta', age:'25', qualification:'bca'
    })
    // const changeObject=()=>{
    //     setObject({
    //         name:'Raju gupta', age:'', qualification:'ba'
    //     })
    // }
    // now you can use spread operator
    const changeObject=()=>{
        setObject({...myobject,name:'Raju gupta',age:'60'})
    }
  return (
    <div>
       <h1>How to work with object using UseState Hook in React</h1>

       <h2 className='hi'>name {myobject.name} age {myobject.age} Qualification {myobject.qualification}</h2>

       <button className='btn' onClick={changeObject}>UpdateData</button>

    </div>
  )
}