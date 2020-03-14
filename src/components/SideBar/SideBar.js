import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SideBar.css'
export default function SideBar() {
    return (
      <div className='sidebar'>
        <div className='sidebar-icons'>
          <Link to='/planner'>
            
        <FontAwesomeIcon className='icon cal' size='2x' icon='calendar-alt' />
          </Link>
          <Link to='/explorer'>
          
        <FontAwesomeIcon className='icon search' size='2x' icon='search' />
          </Link>
          <Link to='/bookmarks'>
      <FontAwesomeIcon className='icon bookmark' size='2x' icon = 'bookmark'/>

          </Link>
      

        </div>
    </div>
    )
}