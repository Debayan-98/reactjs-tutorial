import React, { useEffect, useState } from 'react'
import { edituser,getuser } from '../Service/Api';
import { useNavigate,useParams } from 'react-router-dom';


const initialvalue={
  name:'',
  email:'',
  phone:'',
  city:''
}
export default function Edituser() {
  const[user, setUser]=useState(initialvalue)
  const { name, email, phone, city } = user;
  const {id}=useParams()
  // const classes = useStyles();
  const navigate = useNavigate()

  useEffect(()=>{
      loadUserData()
  },[])

  const loadUserData=async ()=>{
    const response = await getuser(id);
    setUser(response.data);
  }

  const onValueChange=(e)=>{
    console.log(e.target.value);
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user);
  }
  const edituserdetails= async ()=>{
   await edituser(id,user)
   navigate('/all-user');
   
  }
  return (

<form>
      <div>
        <label>Name:
          <input type="text" name="name" onChange={(e) => onValueChange(e)} value={name} />
        </label>
      </div>
      <div>
        <label>Email:
          <input type="text" name="email" onChange={(e) => onValueChange(e)} value={email} />
        </label>
      </div>
      <div>
        <label>Phone:
          <input type="number" name="phone" onChange={(e) => onValueChange(e)} value={phone} />
        </label>
      </div>
      <div>
        <label>:City
          <input type="text" name="city" onChange={(e) => onValueChange(e)} value={city} />
        </label>
      </div>
     <label>
      <button type="btn btn"  onClick={() => edituserdetails()} color="blue" >Update user</button>
     </label>
    </form>
  )
}
