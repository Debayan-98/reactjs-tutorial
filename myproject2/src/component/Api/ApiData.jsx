import React from 'react'
import { useState, useEffect } from 'react';
// import User from '../component/Routess/pages/User';
// import ContextCreate from './ContexCreate';
// import Details from './Details';
export const ApiData = () => {
    
    const[user,setUser]=useState([])
    const getData=async()=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        
        setUser(await response.json());
    }
    useEffect(()=>{
        getData();
    },[])
  const viewMore=(id)=>{
   
   user.map((val)=>{
    if(val.id===id)
    {
        document.write(`<div>
        <h1>name :${val.name}</h1> 
        <h3>username :${val.username}</h3> 
        <h3> email :${val.email}</h3> 
        <h3>addres :</h3>
        <h3> street:${val.address.street}</h3> 
        <h3> suite :${val.address.suite}</h3> 
        <h3>city :${val.address.city}</h3> 
        <h3>zipcode :${val.address.zipcode}</h3> 
        <h3>geo lat:${val.address.geo.lat}</h3> 
        <h3>geo lng :${val.address.geo.lng}</h3>       
        </div>`) 
    }

   }) 
  }
  return (
    <div>
        <div className='container'>
    <div className='row'>
            {
                user.map((CurrentData)=>{
                    return(
        <div className='col-md-4' key={CurrentData.id}>
            <div className="card cardd" >
            <p> Name is : {CurrentData.name}</p>
            <div className="card-body">
            <h5 className="card-title">Email : {CurrentData.email}</h5>
            <p className="card-text">{CurrentData.address.street}</p>
            <button href="#" className="btn btn-primary" onClick={()=>viewMore(CurrentData.id)}>view more</button>
            </div>
            </div>
        </div> 
                    )
                })
            }
    </div>
</div>

    
    </div>
  )
}