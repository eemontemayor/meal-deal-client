import React, {Component} from 'react';
import './PlannerPage.css'

import Planner from '../../components/Planner/Planner'

import MealContext from '../../contexts/MealContext'

export default class PlannerPage extends Component{
    state = {
       
      }
    static contextType = MealContext
  componentDidMount(){
    // console.log(this.context.formattedDate,'context formatted date from plan page')
    // console.log(this.context.day,'context day from planner page')
    // console.log(this.state.value,'state.value from planner page')
    
  }






    render(){
     
           
        return(
            <div className='planner-page'>
       
           <Planner value={this.context.day}  />
         
            </div>
        )
    }
}



