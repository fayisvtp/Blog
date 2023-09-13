import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import './Single.css'
import Singlpost from '../singlepost/Singlpost'


export default function Single() {
  return (
    <div className='single'>
      <Singlpost/>
      <Sidebar/>
    </div>
  )
}
