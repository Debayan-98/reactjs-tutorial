import React,{useContext} from 'react'
import Notecontex from '../../Contexapi/Notes/Notecontex'


const Student = () => {
  const a=useContext(Notecontex)
  return (
    <div>
      <h1>Student Page</h1>
      
      <h1>{a.name}</h1>
      <h1>{a.email}</h1>
      <h1>{a.phone}</h1>
    </div>
  )
}

export default Student
