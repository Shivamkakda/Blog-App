import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <form className='loginForm'>
            <lable>Email</lable>
            <input type="email" placeholder='Enter Your Email...'/>
            <lable>Password</lable>
            <input type="password" placeholder='Enter Your Password...'/>
            <button className='loginButton'>Login</button>
        </form>
        <button className='register'>Sign-Up</button>
    </div>
  )
}
