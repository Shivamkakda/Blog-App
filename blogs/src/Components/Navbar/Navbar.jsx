import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./navbar.css"

export default function Navbar() {
  const {user,dispatch} = useContext(Context)
  const PF  = "http://localhost:5000/images/"

  const handleLogout =()=>{
    dispatch({type:"LOGOUT"})
    window.location.replace("/login")
  }

  return (
    <div className='top'>
        <div className='navLeft'>
        <i className= "navIcon fa-brands fa-facebook"></i>
        <i className= "navIcon fa-brands fa-twitter"></i>
        <i className= "navIcon fa-brands fa-instagram-square"></i>
        <i className= "navIcon fa-brands fa-linkedin"></i>
        </div>
        <div className='navCenter'>
            <ul className='navList'>
                <li className='navListItem'>
                  <Link className='link' to="/" >Home</Link>
                </li>
                <li className='navListItem'>
                <Link className='link' to="/" >About</Link>
                </li>
                <li className='navListItem'>
                <Link className='link' to="/" >Contact</Link>
                </li>
                <li className='navListItem'>
                <Link className='link' to="/write" >Write</Link>
                </li>
                <li className='navListItem' onClick={handleLogout}>
                {user && "Logout"}
                </li>
            </ul>
        </div>
        <div className='navRight'>
          {
            user ? (
              <Link to="/settings" className='link'>
              <img className='proPic'
              src={PF + user.profilePic}
              alt='Profile Pic'/>
              </Link>
            ) : (
              <ul className='navList'>
                <li className='navListItem'>
              <Link className='link' to="login" >Login</Link>
              </li>
              <li className='navListItem'>
              <Link className='link' to="signup" >Signup</Link>
              </li>
              </ul>
            )
          }
          
            <i className= "searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
