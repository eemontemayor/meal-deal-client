import React, {Component} from 'react';
import './PlannerPage.css'
import {Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/Utils/PrivateRoute'
import Planner from '../../components/Planner/Planner'
import dateFormat from 'dateformat';
import MealApiService from '../../services/meal-api-service'
import MealContext from '../../contexts/MealContext'
import MealItemPage from '../MealItemPage/MealItemPage'
export default class PlannerPage extends Component{
    state = {
       
      }
    static contextType = MealContext
  componentDidMount(){
    console.log(this.context.formattedDate,'context formatted date from plan page')
    console.log(this.context.day,'context day from planner page')
    console.log(this.state.value,'state.value from planner page')
    
  }






    render(){
     
           
        return(
            <div className='planner-page'>
       
           <Planner value={this.context.day}  />
         
            </div>
        )
    }
}



