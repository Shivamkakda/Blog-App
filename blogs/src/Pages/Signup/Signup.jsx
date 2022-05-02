import React, { useState } from 'react'
import "./signup.css"
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const [error, setError] = useState(false)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false)
    try{
    const res = await axios.post("/auth/register",{
      username,
      email,
      password,
    });
    res.data && window.location.replace("/login")
  }catch(err){
    setError(true)
  }
  }

  return (
    <div className='signup'>
      <span className="signuptitel">Signup</span>
        <form className='signupForm' onSubmit={handleSubmit}>
            <lable>Username</lable>
            <input className='signupInput' type="text" placeholder='Enter Your Username...' onChange={e =>setUsername(e.target.value)}/>
            <lable>Email</lable>
            <input className='signupInput' type="email" placeholder='Enter Your Email...'onChange={e =>setEmail(e.target.value)}/>
            <lable>Password</lable>
            <input className='signupInput' type="password" placeholder='Enter Your Password...'onChange={e =>setPassword(e.target.value)}/>
            <button className='signupButton' type='submit'>Signup</button>
        </form>
        <button className='signupLogin'>
        <Link className='link' to="/login" >Login</Link>
        </button>
        {error && <span style={{color:"red" , marginTop:"10px"}}>Something Went Wrong</span> }
        
    </div>
  )
}
