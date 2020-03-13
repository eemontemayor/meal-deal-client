import React, {Component} from 'react';
import './PlannerPage.css'
import {Section} from '../../components/Utils/Utils'
import dateFormat from 'dateformat';
// import Planner from '../../components/Planner/Planner'
import 'react-calendar/dist/Calendar.css';
import MealContext from '../../contexts/MealContext'
import Calendar from 'react-calendar'
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
       
         
           <Section >
                    <Calendar className='calendar'
                        onChange={this.context.onChange}
                        value={this.context.value}/>  
            </Section>
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



