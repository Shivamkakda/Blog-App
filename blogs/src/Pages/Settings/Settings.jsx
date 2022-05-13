import React, { useContext, useState } from 'react'
import "./settings.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Context } from '../../context/Context'
import axios from "axios"



export default function Settings() {

const [file,setFile] = useState(null)
const [username,setUsername] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [success,setSuccess] = useState(false)
const {user, dispatch} = useContext(Context)
const PF  = "http://localhost:5000/images/"

const handleSubmit = async(e)=>{
    e.preventDefault();
    dispatch({type:"UPDATE_START"})
    const updatedUser ={
      userId: user._id,
        username,
        email,
        password,
    }
    if(file){
      const data =new FormData()
      const fileName = Date.now()+file.name;
      data.append("name",fileName)
      data.append("file",file);
      updatedUser.profilePic = fileName;

      try {
        await axios.post("/upload",data)
      } catch (error) {}
    }
    try {
     const res = await axios.put("/users/"+user._id,updatedUser);
     setSuccess(true)
     dispatch({type:"UPDATE_SUCCESS",payload:res.data})
    } catch (error) {
        dispatch({type:"UPDATE_FAILURE"})
    }
    
  }
  return (
    <div className='Settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="UpdateTitle"> Update Your account</span>
                <span className="UpdateAccount"> Delete Your Account</span>
            </div>
            <form className="settingForm" onSubmit={handleSubmit}>
                <lable >Profile Picture</lable>
                <div className='settingDP'>
                    <img 
                        src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                        alt=''
                    />
                    <label htmlFor='fileInput'>
                    <i className="settingIcon fa-solid fa-image-portrait"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)}/>
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    <button className='settingsButton' type='submit'>Update</button>
                    {success && <span style={{color:"red"}}> Profile Updated Successfully</span>}
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
