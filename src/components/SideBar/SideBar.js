import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SideBar.css'
export default function SideBar() {
    return (
      <div className='sidebar'>
        <div className='sidebar-icons'>

        <FontAwesomeIcon className='cal-icon' size='3x' icon='calendar-alt' />
        <FontAwesomeIcon className='search-icon' size='3x' icon='search' />
        <FontAwesomeIcon className='shoppingBasket-icon' size='3x' icon = 'shopping-basket'/>

      <FontAwesomeIcon className='bookmark-icon' size='3x' icon = 'bookmark'/>
        </div>
    </div>
    )
}