import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])

    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'> ABOUT US</span>
                <img
                    src='https://cdn-static-1.medium.com/sites/medium.com/creators/images/earn_kelly_kaki.png' />
                <p>
                If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. Sign up for free so your writing can thrive in a network supported by many readers
                </p>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="listItem">
                                {c.name}
                            </li>
                        </Link>

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
