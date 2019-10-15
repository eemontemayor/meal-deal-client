import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';
import './Mod.css'
export default class ModItem extends Component{
  state={
      seeMore:false
  }
static contextType = MealContext

seeMore = (meal) =>{
    this.setState({
        seeMore:!this.state.seeMore,
        ingredients:meal.ingredients,
        image:meal.image
    },()=>{
        console.log(this.state)
    })
}
renderMore=()=>{

    if(this.state.ingredients){

        let ing = this.state.ingredients.replace(/[{}]/g,'').split(',')
       
        const list = ing.map((item,index)=>{
            return <li key={index}>{item}</li>
        })
        
        return( 
        <div>
            {this.state.image ? <img className='bm-img'src={this.state.image} alt='x'/>: null}
            
            <br/>
            Ingredients:
            <ul className='ing-list'>{list}</ul>
        </div>
        )
    }  
}


render(){
   const meal_name = this.props.meal.meal_name
   const index= this.props.index
   const newMeal={
    meal_name:this.props.meal.meal_name,
    ingredients:this.props.meal.ingredients,
    image:this.props.meal.image
}
    return(
        <div >
            {meal_name}
            <button className='del-btn'onClick={()=>this.context.handleDeleteMeal(this.props.meal,index)} >x</button>
            <button className='bm-btn'onClick={()=>this.context.handleAddBookmark(this.props.meal)}>b</button>
            <button className='see-more-btn' onClick={()=>this.seeMore(newMeal)}>...</button>
            <div>

            {this.state.seeMore && this.renderMore()}
            </div>
        </div>
    )
}
}