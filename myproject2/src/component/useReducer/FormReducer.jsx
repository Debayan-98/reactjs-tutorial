import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
const initialstate = [{ id: Date(), name: "", email: "" }]
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.loading]
        case "DELETE":
            return state.filter((user) => {
                return user.id !== action.loading.id
            })
        default:
            return state
    }
}

export const FormReducer = () => {
    const [update, dispatch] = useReducer(reducer, initialstate)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const AddContact = (e) => {
        e.preventDefault();
        const contact = { id: Date(), name: name, email: email }
        setName("")
        setEmail("")
        dispatch({ type: "ADD", loading: contact })
    }
    return (
        <div className='mb-3'>
            <h1 >Advance Level example in Reducer Hooks</h1>
           
            <form onSubmit={AddContact}>
            
                <label>
                    <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <div>
                    <button  style={{backgroundColor: "red",textAlign:"left"}}>Add Contact</button>
                </div>
                
            </form>
            
            <div>

                {update.map(user => {
                    return (
                        <div key={user.id}>
                            <h1>{user.name}</h1>
                            <h2>{user.email}</h2>
                                <button  style={{backgroundColor: "lightblue"}}onClick={() => dispatch({ type: "DELETE", loading: { id: user.id } })}>Delete</button>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}