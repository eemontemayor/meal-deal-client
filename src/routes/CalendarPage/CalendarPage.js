import React from 'react'
import './CalendarPage.css'
import { Link } from 'react-router-dom'
import BigCalendar from '../../components/Calendar/BigCalendar'
export default class CalendarPage extends React.Component{
    render() {
        
        return (
            <div className='calendar-page'>
                <BigCalendar />
                <div className = 'cal-page-btns'>

                <Link to='/planner' className='cal-page-btn planner-btn'>
             
             Plan
      
     </Link>
     {/* <Link to='/explore' className='cal-page-btn explore-btn'>
    
        Explore
        
     
     </Link> */}
     <Link to='/shoppinglist'className='cal-page-btn shoplist-btn' >
         
             Shopping List
         
     </Link>
                </div>
            </div>
            )
        }
}