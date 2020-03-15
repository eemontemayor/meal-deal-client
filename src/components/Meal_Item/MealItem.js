import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';
import {Link } from 'react-router-dom';
import './MealItem.css'
// import EditMealItem from './EditMealItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class MealItem extends Component{
  constructor(props){
    super(props)
    this.state={
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
      <div >
        <button className='idel-btn'onClick={()=>this.context.handleDeleteMeal(this.props.meal,this.props.index)} >x</button>
        <Link to={`/meal/${this.context.formattedDate}/${this.props.meal.id}`}><button className='see-more-btn'>...</button></Link>
        <button className='bm-btn' onClick={() => this.context.handleAddBookmark(this.props.meal)}>b</button>
      </div>)
  }
  if(this.props.bookMark){
    return(
      <div className='item-buttons' >
        <button className='del-btn'onClick={()=>this.context.handleDeleteBookmark(this.props.meal,this.props.index)} > <FontAwesomeIcon className='icon trash' size='1x' icon='trash-alt' /></button> 
        <Link to={`/bookmark/${this.props.meal.id}`}> <button className='see-more-btn'>...</button>  </Link> {/* have to pass this.props.meal.id here to avoid pkey constraint between md and bm */}
        <button className='add-btn' onClick={()=>this.context.postMeal(this.props.meal)}> <FontAwesomeIcon className='icon plus' size='1x' icon='plus' /></button> 
      </div> 
      
    )
  }
}


renderLists=(ingList,instList)=>{
    let newIngList = ingList
    let newInstList = instList
  
    if (newIngList !== undefined) {
      newIngList= newIngList.map((item,index)=>{return <li key={index}>{item}</li>})
    } else {
      newIngList=<li key={0}>'No ingredients saved for this item'</li>
    }
  
    if (newInstList !== undefined) {
      newInstList = newInstList.map((item, index) => { return <li key={index}>{item}</li> })
    } else {

      newInstList=<li key={0}>'No instructions saved for this item'</li>
    }
 
  return (
    <div >
      {/* <Link to={`/bookmark/edit/${this.props.meal.id}`} >Edit Meal</Link> */}
      <div className='lists'>
        <ul className='ing-list'>
          INGREDIENTS:
          {newIngList}
        </ul>
        <ul className='inst-list'>
          INSTRUCTIONS:
          {newInstList}
        </ul>
      </div>
    </div>
  )  
}  

     


   

render(){
  
    const view = this.props.view
    const index= this.props.index
console.log(this.props.image)
   
    return(
        <li  id={this.props.id} key={index}>
      <div className='meal-item'>
             {this.props.image ? <img className='meal-img'src={this.props.image} alt='x'/>: null}

              {this.renderButtons()}
             <p className='meal-name'>{this.props.meal.meal_name}</p> 
            
           {view === 'large' && this.renderLists(this.props.ingredients,this.props.instructions)}
           
      </div>
        </li>
    )
  }
}