import React, {Component} from 'react';
import './PlannerPage.css'
import Calendar from 'react-calendar'
import MealDeal from '../../components/MealDeal/MealDeal'
export default class PlannerPage extends Component{
    state = {
        value: new Date(),
      }
    
     
  

      onChange = value => {
          this.setState({ value })
          console.log(this.state)
        }

        handlePostMeal=()=>{
          
        }  




    render(){
        const { value } = this.state;

        return(
            <div className='planner-page'>

            <Calendar className='calendar'
            onChange={this.onChange}
            value={value}/>
            {this.state && <MealDeal value={value}/>}
            </div>
        )
    }
}