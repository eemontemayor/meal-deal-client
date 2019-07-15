import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';

export default class ModItem extends Component{
  
static contextType = MealContext
render(){
   const meal_name = this.props.meal.meal_name
   const meal_id = this.props.meal.id
    return(
        <div >
            {meal_name}
            <button onClick={()=>this.context.handleDeleteMeal(meal_id)} >X</button>
        </div>
    )
}
}