import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
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
                    <li className="listItem">
                        Life
                    </li>
                    <li className="listItem">
                        Music
                    </li>
                    <li className="listItem">
                        Sports
                    </li>
                    <li className="listItem">
                        Tech
                    </li>
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
