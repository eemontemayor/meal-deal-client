import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';
import './BookMarks.css'


export default class BookmarkItem extends Component{
    state={
        seeMore:false,
        ingredients:[],
        // instructions:[],
        image:''
    }
static contextType = MealContext

seeMore = (meal) =>{
    
    if(meal.ingredients){

        this.setState({
            seeMore:!this.state.seeMore,
            ingredients:meal.ingredients,
            // instructions:meal.instructions,
            image:meal.image
        })
    }
}


renderMore=()=>{

if(this.state.ingredients){
    const pic = this.state.image

    let ing = this.state.ingredients.replace(/[{}]/g,'').split(',')
   
    const ingredientList = ing.map((item,index)=>{
        return <li key={index}>{item}</li>
    })

    return <div>
        <img className='bm-img'src={pic} alt='x'/><br/>
        Ingredients:
        <ul className='ing-list'>{ingredientList}</ul>
        {/* Instructions:
        <ul className='instruction-list'>{instructionList}</ul> */}
        </div>
        
        
}
}

render(){
    // console.log(this.props)
    const newMeal={
        meal_name:this.props.meal.meal_name,
        ingredients:this.props.meal.ingredients,
        // instructions:this.props.meal.instructions,
        image:this.props.meal.image
    }
    // console.log(newMeal)
   const meal_name = this.props.meal.meal_name
   const index= this.props.index
    return(
        <li className='bm-item' key={index} onClick={()=>this.seeMore(newMeal)}>
            {meal_name}
            <button className='del-btn' onClick={()=>this.context.handleDeleteBookmark(this.props.meal,index)} >x</button>
            <button className='add-btn' onClick={()=>this.context.postMeal(newMeal)}>+</button>
            <div>
                

               {this.state.seeMore && this.renderMore()}
              
                
            </div>

        </li>
    )
}
}