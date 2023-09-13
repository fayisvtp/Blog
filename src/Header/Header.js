import React from 'react'
import "./Header.css"
// import Home from '../Pages/Home'

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='titlesm'>Heding</span>
            <span className='titlelg'>Tittle</span>

        </div>
        <img className='header-image' 
        src="https://images.pexels.com/photos/16048262/pexels-photo-16048262/free-photo-of-white-throated-kingfisher-sitting-on-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 alt=" />
     
    </div>
  )
}
