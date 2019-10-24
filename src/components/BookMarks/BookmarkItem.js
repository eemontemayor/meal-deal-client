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
            instructions:meal.instructions,
            image:meal.image
        })
    }
}


renderMore=()=>{
    let ingList=[]
    let instList=[]
        if(this.state.ingredients){
            let ing = this.state.ingredients
            console.log(ing)
        // let ing = this.state.ingredients.replace(/[{}]/g,'').split(',')
       
         ingList = ing.map((item,index)=>{
            return <li key={index}>{item}</li>
        })
        if(this.state.instructions){
            let inst = this.state.instructions
            console.log(inst)
           
             instList = inst.map((item,index)=>{
                return <li key={index}>{item}</li>
            })
        }
        return( 
        <div>
            {this.state.image ? <img className='bm-img'src={this.state.image} alt='x'/>: null}
            
            <br/>
            <div>
                
            Ingredients:
            <ul className='ing-list'>{ingList}</ul>
            </div>
            <div>

            instructions:
            <ul className='inst-list'>{instList}</ul>
            </div>
        </div>
        )
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