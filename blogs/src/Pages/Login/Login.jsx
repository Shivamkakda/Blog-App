import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login'>
      <span className="logintitel">Login</span>
        <form className='loginForm'>
            <lable>Email</lable>
            <input className='loginInput' type="email" placeholder='Enter Your Email...'/>
            <lable>Password</lable>
            <input className='loginInput' type="password" placeholder='Enter Your Password...'/>
            <button className='loginButton'>Login</button>
        </form>
        <button className='register'>
        <Link className='link' to="/signup" >Sign-Up</Link>
        </button>
    </div>
  )
}
