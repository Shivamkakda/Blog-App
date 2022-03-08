import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className='Title'>
            <span className='titleSpan'>React</span>
            <span className='titleSpanBg'>Blog</span>
        </div>
        <img 
            className='headerImg' 
            src='https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='HeaderImage'
            />

    </div>
  )
}
