import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';
import './Mod.css'
export default class ModItem extends Component{
  state={
      seeMore:false
  }
static contextType = MealContext

seeMore = () =>{
    this.setState({
        seeMore:!this.state.seeMore
    },()=>{
        console.log(this.state)
    })
}



render(){
   const meal_name = this.props.meal.meal_name

   const index= this.props.index
    return(
        <div >
            {meal_name}
            <button className='del-btn'onClick={()=>this.context.handleDeleteMeal(this.props.meal,index)} >x</button>
            <button className='bm-btn'onClick={()=>this.context.handleAddBookmark(this.props.meal)}>b</button>
            <button className='see-more-btn' onClick={this.seeMore}>...</button>
        </div>
    )
}
}