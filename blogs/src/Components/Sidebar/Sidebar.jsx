import axios from "axios"
import React, { useEffect, useState } from 'react'
import "./sidebar.css"

export default function Sidebar() {
    const [cats,setCats] = useState([])
 
    useEffect(()=>{
      const getCats = async ()=>{
        const res = await axios.get("/categories")
        setCats(res.data)
      }
      getCats()
    },[])

    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'> ABOUT ME</span>
                <img
                    src='https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam fugit tenetur quam autem. Iste tempore voluptate animi odit pariatur, itaque tenetur nisi, fugit non ex aliquid, nobis molestias sed amet.
                </p>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className="sidebarList">
                  {cats.map((c)=>(
                      <li className="listItem">
                      {c.name}
                  </li>
                  ))}
                    
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarIcon">
                    <i className="sideIcon fa-brands fa-facebook"></i>
                    <i className="sideIcon fa-brands fa-twitter"></i>
                    <i className="sideIcon fa-brands fa-instagram-square"></i>
                    <i className="sideIcon fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}
