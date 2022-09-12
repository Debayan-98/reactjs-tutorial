import React from 'react'
import NoteContex from './Notecontex'

const Notestate = ({children}) => {
    const state={
        name:"Debayan Roy",
        email:"deb23@gmail.com",
        phone:"9675482512"
    }
  return (
    <NoteContex.Provider value={state}>
        {children}
    </NoteContex.Provider>
  )
}

export default Notestate
