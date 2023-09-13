import React from 'react'
import './Post.css'

export default function Post() {
  return (
    <div className='post'>
      <img className='post-image' 
      src='https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
    
    <div className='post-info'>
      <div className='post-ctgrz'>
        <span className='post-ctgr'>MUSIC</span>
        <span className='post-ctgr'>LIFE</span>
      </div>
      <span className='post-tittle'>Lorem Ipsum is simply dummy text  </span>
<hr/>
    <span className='post-date'>1hour ago</span>
    </div>
    <p className='post-decrptn'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essentially unchanged.</p>
    </div>
  )
}
