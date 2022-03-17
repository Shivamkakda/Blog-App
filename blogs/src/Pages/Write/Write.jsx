import React from 'react'
import "./write.css"

export default function Write() {
  return (
    <div className='Write'>  
    <img className='writeImg'
    src='https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    alt=''/>
        <form className='writeform'>
            <div className='writeformGroup'>
                <label htmlFor='fileInput'>
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus ={true}/>

            </div>
            <div className="writeformGroup">
                <textarea placeholder='Write Your Story Here'
                type="text"
                className ="writeInput Text">

                </textarea>
            </div>
            <buttton className="writeSubmit">Publish</buttton>
        </form>
    </div>
  )
}
