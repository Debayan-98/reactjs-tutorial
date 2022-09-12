import React, { useState } from 'react'

export default function Arrayusestate() {
  const biodata = [
    {
      id: 0, name: 'raju kayal', age: '25'
    },
    {
      id: 1, name: 'Aditi gupta', age: '30'
    },
    {
      id: 2, name: 'sanjay', age: '20'
    }
  ]
  //console.log(biodata);
  const [myarrayData, setData] = useState(biodata)


  


  const clearArray = () => {
    setData([])
  }
  return (
    <>
      <h1>How to work with Array using UseState Hook in React</h1>

      {/* {
              biodata.map((data)=>
                <h1 className='hi'>id {data.id} NAme:{data.name} and age:{data.age}</h1>)
              
          } */}
   
      {
        myarrayData.map((data) => {
          return <h1 className='hi' key={data.id}>age:{data.age} and  Name:{data.name} </h1>
        })

      }
      <button className='btn' onClick={clearArray}>Clear Data</button>

    </>
  )
}