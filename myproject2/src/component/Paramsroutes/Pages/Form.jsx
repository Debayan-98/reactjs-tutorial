import React from 'react';
import {useState}from 'react'

 export const Form= () => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [city, setCity] = useState("");
      const [pwd, setPwd ]= useState("");

      
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const user={name,email,phone,city,pwd}
        console.log(user);
        // console.log(email);
        // console.log(phone);
        // console.log(city);
        // console.log(pwd);
      }
    
      return (
        <form onSubmit={handleSubmit}>
<div style={{marginCenter:'80px'}}>
          <div >
          <label>Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
            />
          </label>
          </div>
          <div>
          <label>Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          </div>
          <div>
          <label>Phone:
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          </div>
          <div>
          <label>City:
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)}
            />
          </label>
          </div>
          <div>
          <label>Pwd:
            <input type="text" value={pwd} onChange={(e) => setPwd(e.target.value)}
            />
          </label>
          </div>
          <input type="submit" value="submit"/>
          </div>
        </form>
      )
    }
