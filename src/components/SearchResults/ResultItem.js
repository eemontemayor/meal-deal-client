import React,{Component} from 'react'
import MealApiContext from '../../contexts/MealContext'

export default class ResultItem extends Component{
    static contextType = MealApiContext
    render(){
        const meal ={
            meal_name: this.props.meal.recipe.label,
            ingredients:this.props.meal.recipe.ingredientLines,
            image:this.props.meal.recipe.image
        }
      console.log(meal)
        return(
            <div className='meal-item'>
                <div>
                  <img className='meal-img' src={meal.image} alt='x'/>
                </div>
            <h2>
                {meal.meal_name}
            </h2>
            <button className='add-btn' type='click'onClick={()=>this.context.postMeal(meal)}>Add to {this.context.formattedDate}</button>
            <button className='bm-btn'type='click'onClick={()=>this.context.handleAddBookmark(meal)}>Add to Bookmarks</button>
        </div>
    )
}
}