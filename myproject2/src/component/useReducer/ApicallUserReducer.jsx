
import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'
const initialstate = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                post: action.result,
                error: ''
            }
        case 'ERROR':
            return {
                loading: false,
                post: {},
                error: 'Problem to fetch api'
            }
        default:
            return state
    }
}

export const ApicallUserReducer = () => {
    const [state,dispatch]=useReducer(reducer,initialstate)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>response.json())
        .then(data=>{
            dispatch({type:'SUCCESS',result:data})
        })
        .catch(error=>{
            dispatch ({type:'ERROR'})
        })
    },[])
    return (
        <div>
            <h1>Api call Reducer hooks</h1>


<h3>Title :    {state.post.title}</h3>
<h4> Body:    {state.post.body}</h4>
        </div>
    )
}


