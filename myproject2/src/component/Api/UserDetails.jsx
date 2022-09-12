import React, { useEffect, useState } from "react"

const UserDetails = () => {
  const [user, setUser] = useState([])


  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUser(data)
  }


  
  useEffect(() => {
    fetchData();
  },[])



  

  return (
    <div>
    <div className='container'>
<div className='row'>
        {
            user.map((data)=>{
                return(
    <div className='col-md-4' key={data.id}>
        <div className="card cardd" >
                <p><b>id is :</b> {data.id}</p> 
                <p><b>Name is :</b> {data.name}</p>
                <p><b>UserName is :</b> {data.username}</p>
        <div className="card-body">
              <p className="card-title"><b> Email : </b> {data.email}</p>
       <div className="card-body">
              <p className="card-title"><b> Address: </b></p>
          
                          <p className='card-text'><b>Street:</b>{data.address.street}</p> 
                          <p className='card-text'><b>Suite:</b>{data.address.suite}</p>
                          <p className='card-text'><b>City:</b>{data.address.city}</p>
                          <p className='card-text'><b>Zipcode:</b>{data.address.zipcode}</p>
                          <p className="card-text"><b> Geo: </b></p>
                                <p className='card-text'><b>Lat:</b>{data.address.geo.lat}</p> 
                                <p className='card-text'><b>Lng:</b>{data.address.geo.lng}</p> 
                          
                          
                          <p className="card-title"><b>Phone :</b> {data.phone}</p> 
                          <p className="card-title"><b>Website :</b> {data.website}</p>
                                  
    <div className="card-body">
                          <p className="card-title"><b> Company: </b></p>
                                <p className='card-text'><b>Name:</b>{data.company.name}</p> 
                                <p className='card-text'><b>CatchPhrase:</b>{data.company.catchPhrase}</p> 
                                <p className='card-text'><b>bs:</b>{data.company.bs}</p> 
{/* 
        <a href="#" className="btn btn-primary">userDetails</a>  */}
        </div>
        </div>
    </div> 
    </div>
       </div>       )
            })
        }
</div>
</div>

</div>
  )
}

export default UserDetails
