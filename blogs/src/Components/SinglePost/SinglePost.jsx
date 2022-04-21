import axios from "axios"
import React, { useEffect, useState } from 'react'
import "./singlePost.css"
import { Link, useLocation } from 'react-router-dom'

export default function SinglePost() {

  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})

  useEffect(()=>{
    const getPost = async ()=>{
      const res =await axios.get("/posts/"+ path);
      setPost(res.data)
    }
    getPost()
  },[path])
  return (
    <div className='singlePost'> 
        <div className="singlePostWrp">
          {post.photo && (
            <img className='singlePostImg'
            src={post.photo}
            alt='SinglePost Pic'/>
          )}
        
             <h1 className="singlePosttitle">{post.title}
             <div className="singlePostEdit">
             <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
             <i className="singlePostIcon fa-solid fa-trash-can"></i>
             </div>
             </h1>
             <div className="singlePostInfo">
                 <span className="singlePostAut">Author:
                 <Link to ={`/?user=${post.username}`} className="link">
                 <b>{post.username}</b>
                 </Link>
                 </span>
                 <span className="singlePostDate">{new Date(post.createdAt).toDateString()} </span>
             </div>
             <p className='singlePostDes'>
               {post.description}
             </p>
        </div>
    </div>
  )
}
