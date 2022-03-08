import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'> 
        <div className="singlePostWrp">
        <img className='singlePostImg'
             src='https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
             alt='SinglePost Pic'/>
             <h1 className="singlePosttitle">Lorem shivam
             <div className="singlePostEdit">
             <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
             <i className="singlePostIcon fa-solid fa-trash-can"></i>
             </div>
             </h1>
             <div className="singlePostInfo">
                 <span className="singlePostAut">Author: <b>Shivam</b></span>
                 <span className="singlePostDate"> 1 Hour Ago</span>
             </div>
             <p className='singlePostDes'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus in aperiam voluptate dolore, minima natus magni fugiat quo explicabo? Cum aut animi iusto et voluptatum nesciunt illo sequi eaque!
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, libero. Consequatur autem itaque voluptates quaerat commodi sed, ipsa repellendus reprehenderit aliquam aliquid alias iure voluptatum quia nam inventore, non nisi.
             </p>
        </div>
    </div>
  )
}
