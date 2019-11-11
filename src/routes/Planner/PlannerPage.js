import React, {Component} from 'react';
import './PlannerPage.css'

import Planner from '../../components/Planner/Planner'

import MealContext from '../../contexts/MealContext'

export default class PlannerPage extends Component{
    state = {
       
      }
    static contextType = MealContext
  componentDidMount(){
 
    
  }






    render(){
     
           
        return(
            <div className='planner-page'>
       
           <Planner value={this.context.day}  />
         
            </div>
        )
    }
}



