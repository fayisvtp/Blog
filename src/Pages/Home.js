import React from 'react'
import "./Home.css"
import Header from '../Header/Header'
import Sidebar from '../sidebar/Sidebar'
import Posts from '../sidebar/posts/Posts'


export default function Home() {

  return (
 
  <>
    <Header/>
    <div className='home'>
      
      {/* home */}
      <Posts/>
      <Sidebar/>
      
    </div>
  </>
  )
}
