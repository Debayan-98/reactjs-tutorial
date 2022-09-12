import React, { useState } from 'react'
// import { FormGroup, FormControl, InputLabel, Input, Button, Typography,makeStyles } from '@mui/material'
import { adduser } from '../Service/Api';
import { useNavigate } from 'react-router-dom';

// const useStyles = makeStyles({
//   container: {
//     width: '50%',
//     margin: '5% 0 0 25%',
//     '& > *': {
//       marginTop: 20
//     }
//   }
// })
const initialvalue = {
  name: '',
  email: '',
  phone: '',
  city: ''
}
export default function Adduser() {
  const [user, setUser] = useState(initialvalue)

  const { name, email, phone, city } = user;
  //for custom css function
  // const classes = useStyles();

  const navigate = useNavigate()

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user);
  }
  const adduserdetalis = async () => {
    await adduser(user)
    navigate('/all-user');

  }
  return (
   
    <form id="container">
      <div id="pull"  >
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
      <button type="btn btn"  onClick={() => adduserdetalis()} style={{background:"primary"}} >Add User</button>
     </label>
     </div>
    </form>
  )
}
