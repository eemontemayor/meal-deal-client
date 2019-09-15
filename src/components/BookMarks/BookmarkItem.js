import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';
import './BookMarks.css'


export default class BookmarkItem extends Component{
    state={
        seeMore:false,
        ingredients:[]
    }
static contextType = MealContext

seeMore = (meal) =>{
    
    if(meal.ingredients){

    
    this.setState({
        seeMore:!this.state.seeMore,
        ingredients:meal.ingredients,
        image:meal.image


    },()=>{
        console.log(this.state.ingredients)
    })
}
}
renderMore=()=>{
// console.log(this.state.ingredients)
if(this.state.ingredients){
    const img = this.state.image

    console.log(img)
//     return ing.map((item,index) =>{
//           return <li className='ingredient-item' key={index}>{item}</li>
// })
    // console.log(ing)
    return <img  className='bm-img'  src={img} alt='x'/>
}
}

render(){
    console.log(this.props)
    const newMeal={
        meal_name:this.props.meal.meal_name,
        ingredients:this.props.meal.ingredients,
        image:this.props.meal.image
    }
    console.log(newMeal)
   const meal_name = this.props.meal.meal_name
   const index= this.props.index
    return(
        <div >
            {meal_name}
            <button className='del-btn' onClick={()=>this.context.handleDeleteBookmark(this.props.meal,index)} >x</button>
            <button className='add-btn' onClick={()=>this.context.postMeal(newMeal)}>+</button>
            <button className='see-more-btn' onClick={()=>this.seeMore(newMeal)}>...</button>
            <div>
                

               {this.state.seeMore && this.renderMore()}
              
                
            </div>

        </div>
    )
}
}