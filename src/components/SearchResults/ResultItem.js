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
            <div className={this.props.expPage?'result-item exp-page':'result-item'}>
                <div  className='result-item-header'>
                    <h2>
                        {meal.meal_name}
                    </h2>
                    <div className='meal-options'>
                        {!this.props.expPage &&  <button className='add-btn' type='click'onClick={()=>this.context.postMeal(meal)}>Add to {this.context.formattedDate}</button>}
                        {/* postBookmark={this.props.postBookmark} */}
                        <button className='bm-btn'type='click'onClick={!this.props.expPage?()=>this.context.handleAddBookmark(meal):()=>this.props.postBookmark(meal)}>Add to Bookmarks</button>
                            <button className='ing-btn' type='click' onClick={this.handleViewIngredients}>View Ingredients</button><br/>
                    </div>
                </div>

                <img className='result-item-img' src={meal.image} alt='x'/>
              
                <ul className='ingredient-list'>

                    {this.state.viewIngredients && meal.ingredients.map((item,index) =>{
                        return <li className='ingredient-item' key={index}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}