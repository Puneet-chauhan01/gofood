import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",location:""})

    const handleSubmit= async(e)=>{
        try{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:credentials.name,email:credentials.email,password:credentials.password,
                location:credentials.location
            })
        })
        const json = await response.json()
        console.log(json)

        if(!json.success){
            alert("Enter valid credentials")
        }}catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }

    }
    
    const onChange=(ev)=>{
        setcredentials({...credentials,[ev.target.name]:ev.target.value})
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange = {onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange = {onChange}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange = {onChange}/>
                    </div>
                    <div className="mb-3">
                    <label className="form-check-label"htmlFor="location" >Address</label>
                        <input type="text" className="form-control" value={credentials.location} onChange = {onChange} name='location'/> 
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </>
    )
}
