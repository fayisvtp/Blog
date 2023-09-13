import React from 'react'
import './Write.css'

export default function Write() {
  return (
    <div className='write'>
        <img className='write-image'
         src='https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <form className='writeform'>
        <div className='write-form-group' >
            <label htmlFor='fileInput'>
            <i className='write-icon' class="fa-solid fa-plus"></i>
            </label>
            <input type='file' id='fileInput' style={{display:"none"}}></input>
            <input type='text' placeholder='Title' className='writeInput' autoFocus={true}></input>
        
        </div>
        <div className='writeFormFroup'>
            <textarea placeholder='Tell Your Thinks...'
            type="text" className='writeInput writeText'
            ></textarea>
             
        </div>
        <button className='submit'>Publish</button>
      </form>
    </div>
  )
}
