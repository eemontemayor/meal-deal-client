import React,{Component} from 'react'
import MealApiContext from '../../contexts/MealContext'
import './SearchResults.css'
export default class ResultItem extends Component{
    state={
        viewIngredients:false
    }

    handleViewIngredients=()=>{
        this.setState({
            viewIngredients:!this.state.viewIngredients
        },()=>{
            console.log(this.state)
        })
    }

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
                <h2>
                {meal.meal_name}
            </h2>
                <div className='meal-options'>
                <button className='add-btn' type='click'onClick={()=>this.context.postMeal(meal)}>Add to {this.context.formattedDate}</button>
            <button className='bm-btn'type='click'onClick={()=>this.context.handleAddBookmark(meal)}>Add to Bookmarks</button>
            <button className='ing-btn' type='click' onClick={this.handleViewIngredients}>View Ingredients</button>
           {this.state.viewIngredients && meal.ingredients}
                </div>
                  <img className='meal-img' src={meal.image} alt='x'/>
                 
            
           
                
            
        </div>
    )
}
}