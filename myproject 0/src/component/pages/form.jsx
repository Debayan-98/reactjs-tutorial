import React from 'react'
import { useState } from 'react';
import {name}from

 const form = () => {
    const [name, setName] = useState("Debayan");
    const [email, setEmail] = useState("deb@gmail.com");
    const [phone, setPhone] = useState("8974520631");
    const [city, setCity] = useState("kgp");
    const [pwd, setPwd] = useState("12345");


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(city);
        console.log(pwd);
      }



  return (
    <div>

<form onSubmit={handleSubmit}> 
      <label>Name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Email :
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>Phone:
        <input 
          type="number" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label> 

      <label>City:
        <input 
          type="text" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>

      <label>Pwd:
        <input 
          type="text" 
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </label>
      <input type="submit" />

</form>

    </div>
  )
}
