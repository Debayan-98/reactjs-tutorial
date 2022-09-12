import React,{useState} from 'react'

export default function Toggle() {
    var [myName,setName]=useState('Debayan Roy ')

    const changeData=()=>{
        var name= myName
        if(name=='Debayan Roy'){
            setName('Rakesh')
        }
        else{
            setName('Debayan Roy')
        }
        
        
    }
console.log(myName);
  return (
    <div>
      <h1>How to crate Toggle DaTa using useState hooks</h1>
      <h2>{myName}</h2>
      <button onClick={changeData}>click me</button>
    </div>
  )
}