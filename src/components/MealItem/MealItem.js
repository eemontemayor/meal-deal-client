import React,{Component} from 'react'
import MealApiContext from '../../contexts/MealContext'

export default class MealItem extends Component{
    static contextType = MealApiContext
    render(){
        const meal ={
            meal_name: this.props.meal.recipe.label,
            ingredients:this.props.meal.recipe.ingredients,
        }
      console.log(meal)
        return(
            <div className='meal-item'>
            <h2>
                {meal.meal_name}
            </h2>
            <button type='click'onClick={()=>this.context.postMeal(meal)}>Add to {this.context.formattedDate}</button>
            <button type='click'onClick={()=>this.context.handleAddBookmark(meal)}>Add to Bookmarks</button>
        </div>
    )
}
}