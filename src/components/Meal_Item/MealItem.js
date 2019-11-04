import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';
import {Link } from 'react-router-dom';
import './MealItem.css'
// import EditMealItem from './EditMealItem'

export default class MealItem extends Component{
  constructor(props){
    super(props)
    this.state={
      // seeMore:false,
      ingredients:[],
      instructions:[],
      image:''
    }
  }
static contextType = MealContext



  componentDidMount(){
  console.log(this.props.meal)
  console.log(this.props.view)


    }
   
    
  

renderButtons=()=>{
  
  if(this.props.view === 'meals-of-day'){
    return (
    <div><button className='item-bm-btn'onClick={()=>this.context.handleAddBookmark(this.props.meal)}>b</button>
    <button className='item-del-btn'onClick={()=>this.context.handleDeleteMeal(this.props.meal,this.props.index)} >x</button>
    <Link to={`/meal/${this.context.formattedDate}/${this.props.meal.id}`}>
  
  see more</Link>
    </div>)
  }
  if(this.props.view === 'bookmarks'){
    return(
      <div>
        <button className='item-add-btn' onClick={()=>this.context.postMeal(this.props.meal)}>+</button> 
             <button className='item-del-btn'onClick={()=>this.context.handleDeleteBookmark(this.props.meal,this.props.index)} >x</button> 
              <Link to={`/bookmark/${this.props.meal.id}`}> See More </Link> {/* have to pass this.props.meal.id here to avoid pkey constraint between md and bm */}
              </div> 
      
    )
  }
}


renderLists=(ingList,instList)=>{
  let newIngList = ingList
  let newInstList = instList
if (newIngList !== undefined) {
  newIngList= newIngList.map((item,index)=>{return <li key={index}>{item}</li>
})}else{

  newIngList=<li key={0}>'No ingredients saved for this item'</li>
}
if (newInstList !== undefined) {
  newInstList= newInstList.map((item,index)=>{return <li key={index}>{item}</li>
})}else{

  newInstList=<li key={0}>'No instructions saved for this item'</li>
}
 return (<div>
{/* <Link to={`/bookmark/edit/${this.props.meal.id}`} >Edit Meal</Link> */}
  <div className='lists'>
  <ul className='ing-list'>
Ingredients
{newIngList}
  </ul>
  <ul className='inst-list'>
    Instructions
{newInstList}
  </ul>

</div>
 </div>
 )
  }  

     


   

render(){
  
    const view = this.props.view
    const index= this.props.index

   
    return(
      <div >
        <li className= {this.props.cssClass} id={this.props.id} key={index}>
             {this.props.image ? <img className='meal-img'src={this.props.image} alt='x'/>: null}

         

              {this.renderButtons()}
             <p className='meal-name'>{this.props.meal.meal_name}</p> 
            
           {view === 'large' && this.renderLists(this.props.ingredients,this.props.instructions)}
           
        </li>
      </div>
    )
  }
}