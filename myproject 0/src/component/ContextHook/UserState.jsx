import React from 'react'
import { ContextUser } from './ContextUser'
export const UserState = ([children]) => {

    const state={
        name:"Debayan Roy",
        email:"deb23@gmail.com", 
        phone:"9985741253"
    }


  return (
    <NoteContext.Provider value = {state}>
         {children}
    </NoteContext.Provider>
  )
}
 