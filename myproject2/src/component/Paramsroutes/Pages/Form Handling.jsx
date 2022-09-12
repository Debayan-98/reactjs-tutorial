import React from 'react';
import {useState}from 'react'
  export function FormHandling (){
    const[state,setState]=useState({
        name:"",
        email:" ",
        phone: "" ,
        city: " ",
        pwd: "",
   });

      // const [name, setName] = useState("");
      // const [email, setEmail] = useState("");
      // const [phone, setPhone] = useState("");
      // const [city, setCity] = useState("");
      // const [pwd, setPwd ]= useState("");

      
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const  user ={name ,email,phone,city,pwd}
        setState({...state,[e.target.user]:e.target.value})
        //         [e.target.email]:e.target.value,
        //         [e.target.phone]:e.target.value,
        //         [e.target.city]:e.target.value, 
        //         [e.target.pwd]:e.target.value,
        // }
        
        // const user={name,email,phone,city,pwd}
        // console.log(user);
        // console.log(email);
        // console.log(phone);
        // console.log(city);
        // console.log(pwd);
      }
    
      return (
        <form onSubmit={handleSubmit}>
<div style = {{marginCenter:'80px'}}>
          <div >
          <label>Name:
            <input type="text" value={name} 
            />
          </label>
          </div>
          <div>
          <label>Email:
            <input type="text" value={email} 
            />
          </label>
          </div>
          <div>
          <label>Phone:
            <input type="text" value={phone} 
            />
          </label>
          </div>
          <div>
          <label>City:
            <input type="text" value={city} 
            />
          </label>
          </div>
          <div>
          <label>Pwd:
            <input type="text" value={pwd} 
            />
          </label>
          </div>
          <input type="submit" value="submit"/>
          </div>
        </form>
      )
    }
