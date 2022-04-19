import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"

export default function Navbar() {
  const user = false;
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
                <li className='navListItem'>
                {user && "Logout"}
                </li>
            </ul>
        </div>
        <div className='navRight'>
          {
            user ? (
              <img className='proPic'
              src='https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='Profile Pic'/>
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
