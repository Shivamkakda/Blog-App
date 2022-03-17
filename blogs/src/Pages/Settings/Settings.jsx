import React from 'react'
import "./settings.css"
import Sidebar from '../../Components/Sidebar/Sidebar'


export default function Settings() {
  return (
    <div className='Settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="UpdateTitle"> Update Your account</span>
                <span className="UpdateAccount"> Delete Your Account</span>
            </div>
            <form className="settingForm">
                <lable >Profile Picture</lable>
                <div className='settingDP'>
                    <img 
                        src='https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                        alt=''
                    />
                    <label htmlFor='fileInput'>
                    <i className="settingIcon fa-solid fa-image-portrait"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Name' />
                    <label>Email</label>
                    <input type="email" placeholder='Email' />
                    <label>Password</label>
                    <input type="password" placeholder='Password' />
                    <button className='settingsButton'>Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
