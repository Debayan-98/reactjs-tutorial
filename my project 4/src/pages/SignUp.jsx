import React, { useState } from 'react'

export const SignUp= () => {
    const [user, setUser] = useState({
        name: "",
        password:""
       
    })
    const [error, setError] = useState({})

    const validation = () => {
        let error = {};
       
        if (!user.name) {
            error.name = "Name is Required";
        }
        
    if(!user.password){
    error.password="password is required"
}

        return error;

    };

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        if (name === "Username") {
            if (value.length === 0) {
                setError({ ...error, name: "Name is Required" });
                setUser({
                    ...user,
                    name: "",
                });
            } else {
                setError({ ...error, name: "" });
                setUser({
                    ...user,
                    name: value,
                });
            }
        }      
      
        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "password is Required" });
                setUser({
                    ...user,
                    password: "",
                });
            } else {
                setError({ ...error, password: "" });
                setUser({
                    ...user,
                    password: value,
                });
            }
        }      
    };

    const SubmitInfo = (e) => {
        e.preventDefault();
        let ErrorList = validation();
        setError(validation());

        if (Object.keys(ErrorList).length === 0) {
            let reg = {
                name: user.name,
                password:user.password
            };
            console.log(reg);
        }
    };


    return (
        <>
            <div className='container'>
                <h1>RegisterUser signin</h1>
                <form onSubmit={SubmitInfo}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">UserName</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter name"
                            name="name"
                            value={user.name}
                            onChange={postUserData}
                        />
                        <span style={{ color: "red", marginLeft: "24px" }}>
                            {error.name}
                        </span>
                    </div>
                    
                    
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">password</label>
                        <input type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name="password"
                            value={user.password}
                            onChange={postUserData}
                        />
                        <span style={{ color: "red", marginLeft: "24px" }}>
                            {error.password}
                        </span>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </>
    )
}