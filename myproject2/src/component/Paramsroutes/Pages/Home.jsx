import React from 'react'
import{useContext} from 'react'
import Notecontex from '../../Contexapi/Notes/Notecontex'


const Home = () => {
  const result=useContext(Notecontex)
  return (
    <div>
      <h1>Home Page</h1>
      <h1> {result.name}</h1>
      <h1> {result.email}</h1>
      <h1> {result.phone}</h1>
    </div>
  )
}

export default Home
