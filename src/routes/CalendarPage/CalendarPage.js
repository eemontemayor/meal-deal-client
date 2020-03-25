import React from 'react'
import './CalendarPage.css'
import MealContext from "../../contexts/MealContext";
import MealApiService from "../../services/meal-api-service";
import { Link } from 'react-router-dom'
import BigCalendar from '../../components/Calendar/BigCalendar'
export default class CalendarPage extends React.Component{
   
   
    static contextType = MealContext;
    componentDidMount() {
      MealApiService.getUserMeals()
        .then(this.context.setUserMeals)
        .catch(this.context.setError);
    }
   
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