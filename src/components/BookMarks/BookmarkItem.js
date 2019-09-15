import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';

export default class BookmarkItem extends Component{
    state={
        seeMore:false
    }
static contextType = MealContext

seeMore = (meal) =>{
    console.log(meal)
    if(meal.ingredients){

    
    this.setState({
        seeMore:!this.state.seeMore,
        ingredients:meal.ingredients


    },()=>{
        console.log(this.state)
    })
}
}
renderIngredients=()=>{
console.log(this.state.ingredients)
if(this.state.ingredients){
    const ing = this.state.ingredients
//     return ing.map((item,index) =>{
//           return <li className='ingredient-item' key={index}>{item}</li>
// })
    return <p>{ing}</p>
}}

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
            <button className='del-btn' onClick={()=>this.context.handleDeleteBookmark(this.props.meal,index)} >x</button>
            <button className='add-btn' onClick={()=>this.context.postMeal(newMeal)}>+</button>
            <button className='see-more-btn' onClick={()=>this.seeMore(newMeal)}>...</button>
            <div>
                <ul>

               {this.state.seeMore && this.renderIngredients()}
              
                </ul>
            </div>

        </div>
    )
}
}