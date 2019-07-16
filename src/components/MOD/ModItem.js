import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';

export default class ModItem extends Component{
  
static contextType = MealContext
render(){
   const meal_name = this.props.meal.meal_name

   const index= this.props.index
    return(
        <div >
            {meal_name}
            <button onClick={()=>this.context.handleDeleteMeal(this.props.meal,index)} >x</button>
            <button onClick={()=>this.context.handleAddBookmark(this.props.meal)}>+</button>
        </div>
    )
}
}