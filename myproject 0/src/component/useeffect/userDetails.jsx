import React, { useEffect, useState } from "react"

const userDeatails = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users ${id}`)
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
    <div className='container'>
<div className='row'>
        {
            user.map((CurrentData)=>{
                return(
    <div className='col-md-4' key={CurrentData.id}>
        <div className="card cardd" >
                <p><b>id is :</b> {CurrentData.id}</p> 
                <p><b>Name is :</b> {CurrentData.name}</p>
                <p><b>UserName is :</b> {CurrentData.username}</p>
        <div className="card-body">
              <p className="card-title"><b> Email : </b> {CurrentData.email}</p>
       <div className="card-body">
              <p className="card-title"><b> Address: </b></p>
          
                          <p className='card-text'><b>Street:</b>{CurrentData.address.street}</p> 
                          <p className='card-text'><b>Suite:</b>{CurrentData.address.suite}</p>
                          <p className='card-text'><b>City:</b>{CurrentData.address.city}</p>
                          <p className='card-text'><b>Zipcode:</b>{CurrentData.address.zipcode}</p>
                          <p className="card-text"><b> Geo: </b></p>
                                <p className='card-text'><b>Lat:</b>{CurrentData.address.geo.lat}</p> 
                                <p className='card-text'><b>Lng:</b>{CurrentData.address.geo.lng}</p> 
                          
                          
                          <p className="card-title"><b>Phone :</b> {CurrentData.phone}</p> 
                          <p className="card-title"><b>Website :</b> {CurrentData.website}</p>
                                  
    <div className="card-body">
                          <p className="card-title"><b> Company: </b></p>
                                <p className='card-text'><b>Name:</b>{CurrentData.company.name}</p> 
                                <p className='card-text'><b>CatchPhrase:</b>{CurrentData.company.catchPhrase}</p> 
                                <p className='card-text'><b>bs:</b>{CurrentData.company.bs}</p> 

        <a href="#" className="btn btn-primary">userDetails</a>
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

export default userDeatails
