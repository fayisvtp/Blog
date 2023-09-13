import React from 'react'
import "./Sidebar.css"


export default function Sidebar() {
  return (
    <div className='sideBar'>
      <div className='sidebaritem'>
        <span className='sidebar-tittle'>ABOUNT ME</span>
        <img className='sidebar-img' src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever 
            since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.
         </p>
      </div>
      <div className='sidebaritem'>
      <span className='sidebar-tittle'>CATEGORIES</span>
      <ul className='sidebar-list'>
        {/* <li className='sidebar-list-item'>Speak</li> */}
        <li className='sidebar-list-item'>Sports</li>
        <li className='sidebar-list-item'>Music</li>
        <li className='sidebar-list-item'>Movie</li>
        <li className='sidebar-list-item'>Life</li>
        <li className='sidebar-list-item'>Tech</li>
        <li className='sidebar-list-item'>Style</li>
      </ul>
    </div>
    <div className='sidebaritem'>
    <span className='sidebar-tittle'>FOLLOW US</span>
    <div className='sidebar-social'>
    <i className='sidebar-icons fab fa-twitter'></i>
    <i className='sidebar-icons fab fa-linkedin'></i>
    <i className='sidebar-icons fab fa-facebook'></i>
    <i className='sidebar-icons fab fa-whatsapp'></i>
    </div>

    </div>
    </div>
  )
}
