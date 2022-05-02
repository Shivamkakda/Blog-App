import React, { useContext, useState } from 'react'
import "./write.css"
import axios from "axios"
import { Context } from '../../context/Context'

export default function Write() {
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [file,setFile] = useState(null)
  const {user} = useContext(Context)

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const newPost ={
      username: user.username,
      title,
      description
    }
    if(file){
      const data =new FormData()
      const fileName = Date.now()+file.name;
      data.append("name",fileName)
      data.append("file",file);
      newPost.photo = fileName;

      try {
        await axios.post("/upload",data)
      } catch (error) {}
    }
    try {
     const res = await axios.post("/posts",newPost);
     window.location.replace("/post/"+res.data._id)
    } catch (error) {
      
    }
    
  }
  return (
    <div className='Write'>  
    {file && (
      <img className='writeImg'
      src={URL.createObjectURL(file)}
      alt=''/>
    )}
        <form className='writeform' onSubmit={handleSubmit}>
            <div className='writeformGroup'>
                <label htmlFor='fileInput'>
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus ={true}  onChange={(e) => setTitle(e.target.value)}/>

            </div>
            <div className="writeformGroup">
                <textarea placeholder='Write Your Story Here'
                type="text"
                className ="writeInput Text"
                onChange={(e) => setDescription(e.target.value)}>

                </textarea>
            </div>
            <buttton className="writeSubmit" type="submit">Publish</buttton>
        </form>
    </div>
  )
}
