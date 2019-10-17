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
        return(
            <div className={this.props.expPage?'meal-item exp-page':'meal-item'}>
                <div  className='meal-item-header'>
                    <h2>
                        {meal.meal_name}
                    </h2>
                    <div className='meal-options'>
                        {!this.props.expPage &&  <button className='add-btn' type='click'onClick={()=>this.context.postMeal(meal)}>Add to {this.context.formattedDate}</button>}
                       
                        <button className='bm-btn'type='click'onClick={()=>this.context.handleAddBookmark(meal)}>Add to Bookmarks</button>
                            <button className='ing-btn' type='click' onClick={this.handleViewIngredients}>View Ingredients</button><br/>
                    </div>
                </div>

                <img className='meal-img' src={meal.image} alt='x'/>
              
                <ul className='ingredient-list'>

                    {this.state.viewIngredients && meal.ingredients.map((item,index) =>{
                        return <li className='ingredient-item' key={index}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}