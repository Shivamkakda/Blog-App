import React from 'react'
import "./signup.css"
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='signup'>
      <span className="signuptitel">Signup</span>
        <form className='signupForm'>
            <lable>Username</lable>
            <input className='signupInput' type="email" placeholder='Enter Your Username...'/>
            <lable>Email</lable>
            <input className='signupInput' type="email" placeholder='Enter Your Email...'/>
            <lable>Password</lable>
            <input className='signupInput' type="password" placeholder='Enter Your Password...'/>
            <button className='signupButton'>Signup</button>
        </form>
        <button className='signupLogin'>
        <Link className='link' to="/login" >Login</Link>
        </button>
    </div>
  )
}
