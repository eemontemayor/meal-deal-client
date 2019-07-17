import React,{Component} from 'react'

export default class MealItem extends Component{
    render(){

        let name = this.props.meal.recipe.label
        return(
            <div className='meal-item'>
            <h2>
                {name}
            </h2>
            <button type='submit'onSubmit={this.context.handlePostMeal}>Add to ....</button>
            <button type='click'onClick={this.context.handleAddBookmark}>Add to Bookmarks</button>
        </div>
    )
}
}