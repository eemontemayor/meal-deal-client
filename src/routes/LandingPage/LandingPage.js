import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './LandingPage.css'
export default class LandingPage extends Component{
render(){
    return(
        <div className='landing-page'>
            <nav className='SideBarNav'>
            <FontAwesomeIcon className='nav-icon cal-icon' size='3x' icon='calendar-alt' />
              <FontAwesomeIcon className='nav-icon search-icon' size='3x' icon='search' />
              <FontAwesomeIcon className='nav-icon bookmark-icon' size='3x' icon = 'bookmark'/>
            </nav>
            <Link to='/planner' className='landing-btn planner-btn'>
             
                    Plan
             
            </Link>
            <Link to='/explore' className='landing-btn explore-btn'>
           
               Explore
               
            
            </Link>
            <Link to='/shoppinglist'className='landing-btn shoplist-btn' >
                
                    Shopping List
                
            </Link>
        </div>
    )
}

}