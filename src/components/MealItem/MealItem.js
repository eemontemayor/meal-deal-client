import React,{Component} from 'react'

export default class MealItem extends Component{
    render(){
        const meal ={
            meal_name: this.props.meal.recipe.label,
            
        }
      
        return(
            <div className='meal-item'>
            <h2>
                {meal.meal_name}
            </h2>
            <button type='submit'onSubmit={this.context.handlePostMeal}>Add to ....</button>
            <button type='click'onClick={()=>this.context.handleAddBookmark}>Add to Bookmarks</button>
        </div>
    )
}
}