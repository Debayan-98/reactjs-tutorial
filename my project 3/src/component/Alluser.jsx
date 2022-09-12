import React, { useEffect, useState } from 'react'
import { getuser,deleteUser ,edituser} from '../Service/Api'
import { Link } from 'react-router-dom';

export default function Alluser() {
 

  const [user,setUser]=useState([])

    useEffect(()=>{
      getalluser()
    },[])

  
  


  const getalluser= async()=>{
     const response=await getuser()
     console.log(response.data);
     setUser(response.data)
  }
const deleteUserData = async(id)=>{
   await deleteUser(id);
   getalluser()
}
 
// const edituserdata=async(id)=>{
//   await edituser(id);
//   getalluser()
// }
  return (
    <div>
      
<div className='pop' style={{ marginTop: '50px' ,textAlign:"left",background:"pink",}} >All Data Record</div>
<table id="class">
  <thead>
    <tr className='child'>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>City</th>
      <th>Action</th>

    </tr>
  </thead>
  <tbody>
   {user.map((users)=> (
    <tr className="table-row" key={users.id}>
      <th>{users.id}</th>
      <th>{users.name}</th>
      <th>{users.email}</th>
      <th>{users.phone}</th>
      <th>{users.city}</th>
      <th>
        <button  type="btn btn" style={{background:"green"}} component={Link} to={`/edit-user/${users.id}`} >Edit</button>
        {/* <button color="primary" type="btn btn" onClick={()=>edituserdata(`edit-user/users.id`)}>Edit</button> */}
        {/*  <Button variant="contained" color="primary" component={Link} to={`/edit-user/${users.id}`} style={{ marginRight: 10 }} >Edit</Button> */}
        <button type="btn btn" onClick={()=>deleteUserData(users.id)} style={{background:"red"}}>Delete</button>
      </th>
    </tr>
   ))}
   

  </tbody>
</table>

    </div>
  )
}
