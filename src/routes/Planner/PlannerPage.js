import React, {Component} from 'react';
import './PlannerPage.css'
import {Section} from '../../components/Utils/Utils'
import dateFormat from 'dateformat';
// import Planner from '../../components/Planner/Planner'
import 'react-calendar/dist/Calendar.css';
import MealContext from '../../contexts/MealContext'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import BigCalendar from '../../components/Calendar/BigCalendar'
import StyledButton from '../../components/Button/Button'

export default class PlannerPage extends Component{
    state = {
       
      }
    static contextType = MealContext
  componentDidMount(){
 
    
  }






    render(){
             const day = dateFormat(this.props.value, 'mm/dd/yy')
        const formattedDay=dateFormat(day, 'ddd')
           
        return(
            <div className='planner-page'>
       
         
            <div className='calendar-container' >
              <BigCalendar  />
              {/* <Calendar className='calendar'
                showDoubleView='true'
                view='week'
                        onChange={this.context.onChange}
                        value={this.context.value}/>   */}
            </div>
            {/* <Section className='mod-container'>
                    <p className='meal-date'>
                     {day}  {formattedDay}      
                    </p>
                     <Mod className='meals-of-day' />
                 </Section> */}
          
          
          </div>
          
        )
    }
}



