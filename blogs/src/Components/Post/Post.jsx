import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'> 
        <img className='postImg'
             src='https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
             alt='Post Pic'/>
             <div className="postInfo">
                 <div className="postCats">
                     <span className="postCat">Music</span>
                     <span className="postCat">Life</span>
                 </div>
                 <span className="postTitle">
                 Hello Chap, In Capgemini, there is a no probation period as such. 
                 </span>
                 <hr/>
                 <span className="postDate">1 Hour ago</span>
             </div>
             <p className='postDes'>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ea architecto cum molestias autem ducimus suscipit molestiae obcaecati temporibus sint aut ratione, non deleniti impedit. Incidunt placeat saepe expedita quia.
             </p>
    </div>
  )
}
