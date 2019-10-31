import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';
import {Link } from 'react-router-dom';
import './MealItem.css'
// import EditMealItem from './EditMealItem'

export default class MealItem extends Component{
  state={
    seeMore:false,
    ingredients:[],
    instructions:[],
    image:''
  }
static contextType = MealContext



  componentDidMount(){
    this.setState({
      seeMore:this.props.seeMore
    })
  
  }



seeMore = (meal) =>{
    this.setState({
        seeMore:!this.state.seeMore,
        ingredients:meal.ingredients,
        instructions:meal.instructions,
    
        image:meal.image
    },()=>{
        console.log(this.state)
        if(!this.state.seeMore){
            this.context.goBack()
        }
    })
}
renderMore=(ing, inst)=>{
    let ingList=[]
    let instList=[]
    if(ing !== Array){
        // let ing = this.state.ingredients
            console.log(ing)
        // let ing = this.state.ingredients.replace(/[{}]/g,'').split(',')
       
         ingList = ing.map((item,index)=>{
            return <li key={index}>{item}</li>
        })} else {
             ingList=<li key={0}>'No ingredients saved for this item'</li>
        }
        if(inst !== Array){
            // let inst = this.state.instructions
            console.log(inst)
           
             instList = inst.map((item,index)=>{
                return <li key={index}>{item}</li>
            })} else {
                 instList= <li key={0}>'No instructions saved for this item'</li>
            
        }
        return( 
        <div>
           {this.props.view === 'bookmarks' && <Link to={`/planner/bookmark/edit/${this.props.meal.id}`} >Edit Meal</Link>}
           <br/>
            {this.state.image ? <img className='meal-img'src={this.state.image} alt='x'/>: null}
            <br/>
            <div className='lists'>
              <div>
            <h6>Ingredients:</h6>
            <ul className='ing-list'>{ingList}</ul>
                  </div>  
         

            <div>   

            <h6>Instructions:</h6>
            <ul className='inst-list'>{instList}</ul>
            </div>
            </div>
        </div>
        )
    }  


   

render(){
  const bookmarks = this.context.bookmarks
  const MOD = this.context.MOD
    const view = this.props.view
  const lists = this.renderMore(this.state.ingredients,this.state.instructions)
   const index= this.props.index
   console.log(this.props.meal)
//    const id=this.props.meal.id
   const meal={
  //  id:this.props.meal.id,   // uncommented because it leads to pkey violations (bookmarks have their own id)
    meal_name:this.props.meal.meal_name,
    ingredients:this.props.meal.ingredients,
    instructions:this.props.meal.instructions,
    image:this.props.meal.image
}
    return(
      <div className={this.state.isEditing && 'edit-meal-page'}> {/* pretty hacky... should try to find another way*/ }

        <li
        className= {this.props.cssClass} id={this.state.seeMore ? `item-selected`: undefined} 
        key={index}
      
        >
             <div className={this.state.seeMore ?'meal-item-header' :undefined}>

                {view === 'meals-of-day'&& <div><button className='item-bm-btn'onClick={()=>this.context.handleAddBookmark(meal)}>b</button>
                <button className='item-del-btn'onClick={()=>this.context.handleDeleteMeal(this.props.meal,index)} >x</button>
                <Link to={`/planner/meal/${this.props.meal.id}`}onClick={()=>this.context.findMealById(this.props.meal.id, MOD)}>{!this.state.seeMore? 'see more':'see less'}</Link></div>}

                {view === 'bookmarks' &&  <div><button className='item-add-btn' onClick={()=>this.context.postMeal(meal)}>+</button> 
             <button className='item-del-btn'onClick={()=>this.context.handleDeleteBookmark(this.props.meal,index)} >x</button> 
              <Link to={`planner/bookmark/${this.props.meal.id}`} onClick={()=>this.context.findMealById(this.props.meal.id, bookmarks)}>{!this.state.seeMore? 'see more':'see less'}</Link> {/* have to pass this.props.meal.id here to avoid pkey constraint between md and bm */}
              </div> }
            <p className='meal-name'>{meal.meal_name}</p> 
             </div>
            <div>
           
            {this.state.seeMore && lists}
          { this.state.seeMore&& <button onClick={()=>this.props.history.goBack()}></button>}
            </div>
           
        </li>
        </div>
    )
}
}