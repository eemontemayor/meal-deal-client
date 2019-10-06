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
        })
    }
}


renderMore=()=>{

if(this.state.ingredients){
    const pic = this.state.image
    console.log(this.state.ingredients)

    let ing = this.state.ingredients.replace(/[{}]/g,'').split(',')
   
    console.log(ing)
    const list = ing.map((item,index)=>{
        return <li key={index}>{item}</li>
    })
    return <div>
        <img src={pic} alt='x'/>
        Ingredients:
        <ul className='ing-list'>{list}</ul>
        </div>
        
        
    // return <img  className='bm-img'  src={img} alt='x'/>
}
}

render(){
    // console.log(this.props)
    const newMeal={
        meal_name:this.props.meal.meal_name,
        ingredients:this.props.meal.ingredients,
        image:this.props.meal.image
    }
    // console.log(newMeal)
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