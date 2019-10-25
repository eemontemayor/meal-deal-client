import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';
import './MealItem.css'
export default class MealItem extends Component{
  state={
    seeMore:false,
    ingredients:[],
    // instructions:[],
    image:''
  }
static contextType = MealContext



  componentDidMount(){
      console.log(this.context.MOD)
  }

seeMore = (meal) =>{
    this.setState({
        seeMore:!this.state.seeMore,
        ingredients:meal.ingredients,
        instructions:meal.instructions,
    
        image:meal.image
    },()=>{
        console.log(this.state)
    })
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
            {this.state.image ? <img className='meal-img'src={this.state.image} alt='x'/>: null}
            
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
    const view = this.props.view

   const index= this.props.index
   const meal={
    meal_name:this.props.meal.meal_name,
    ingredients:this.props.meal.ingredients,
    instructions:this.props.meal.instructions,
    image:this.props.meal.image
}
    return(
        <li className= {this.props.cssClass} key={index}onClick={()=>this.seeMore(meal)}>
             
        
                {meal.meal_name}
                <button className='item-del-btn'onClick={()=>this.context.handleDeleteMeal(meal,index)} >x</button>

                {view === 'meals-of-day'&& <button className='item-bm-btn'onClick={()=>this.context.handleAddBookmark(meal)}>b</button>}
                {view === 'bookmarks' &&   <button className='item-add-btn' onClick={()=>this.context.postMeal(meal)}>+</button> }
         
            <div>

            {this.state.seeMore && this.renderMore()}
            </div>
           
        </li>
    )
}
}