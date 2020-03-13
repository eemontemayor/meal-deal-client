import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SideBar.css'
export default function SideBar() {
    return (
      <div className='sidebar'>
        <div className='sidebar-icons'>
          <Link to='/planner'>
            
        <FontAwesomeIcon className='cal-icon' size='3x' icon='calendar-alt' />
          </Link>
          <Link to='/explorer'>
          
        <FontAwesomeIcon className='search-icon' size='3x' icon='search' />
          </Link>
          <Link to='bookmarks'>
      <FontAwesomeIcon className='bookmark-icon' size='3x' icon = 'bookmark'/>

          </Link>
          <Link to='shoppinglist'>
          
        <FontAwesomeIcon className='shoppingBasket-icon' size='3x' icon = 'shopping-basket'/>
          </Link>

        </div>
    </div>
    )
}