import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';
import './Mod.css'
export default class ModItem extends Component{
  
static contextType = MealContext
render(){
   const meal_name = this.props.meal.meal_name

   const index= this.props.index
    return(
        <div >
            {meal_name}
            <button className='del-btn'onClick={()=>this.context.handleDeleteMeal(this.props.meal,index)} >x</button>
            <button className='bm-btn'onClick={()=>this.context.handleAddBookmark(this.props.meal)}>bookmark</button>
        </div>
    )
}
}