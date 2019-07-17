import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';

export default class BookmarkItem extends Component{
  
static contextType = MealContext

render(){
    const newMeal={
        meal_name:this.props.meal.meal_name,
        ingredients:this.props.meal.ingredients
    }
   const meal_name = this.props.meal.meal_name
   const index= this.props.index
    return(
        <div >
            {meal_name}
            <button onClick={()=>this.context.handlePostBookmark(newMeal)}>+</button>
            <button onClick={()=>this.context.handleDeleteBookmark(this.props.meal,index)} >x</button>
        </div>
    )
}
}