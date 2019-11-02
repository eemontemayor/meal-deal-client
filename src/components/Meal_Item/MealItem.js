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
 return (
  <div className='lists'>
  <ul className='ing-list'>

{newIngList}
  </ul>
  <ul className='inst-list'>
    
{newInstList}
  </ul>

</div>
 )
  }  

       
        // return( 
        // <div>
        //   <Link to={`/bookmark/edit/${this.props.meal.id}`} >Edit Meal</Link>
        //    <br/>
        //     {this.state.image ? <img className='meal-img'src={this.state.image} alt='x'/>: null}
        //     <br/>
        //     <div className='lists'>
        //       <div>
        //     <h6>Ingredients:</h6>
        //     <ul className='ing-list'>{ingList}</ul>
        //           </div>  
         

        //     <div>   

        //     <h6>Instructions:</h6>
        //     {/* <ul className='inst-list'>{instList}</ul> */}
        //     </div>
        //     </div>
        // </div>
        // )
  


   

render(){
  
    const view = this.props.view
    const index= this.props.index

   
    return(
      <div >
        <li className= {this.props.cssClass} id={this.props.id} key={index}>
             {this.props.image ? <img className='meal-img'src={this.props.image} alt='x'/>: null}
             <p className='meal-name'>{this.props.meal.meal_name}</p> 

                {view === 'meals-of-day'&& <div><button className='item-bm-btn'onClick={()=>this.context.handleAddBookmark(this.props.meal)}>b</button>
                <button className='item-del-btn'onClick={()=>this.context.handleDeleteMeal(this.props.meal,index)} >x</button>
                <Link to={`/planner/meal/${this.props.meal.id}`}
                // onClick={()=>this.context.findMealById(this.props.meal.id, MOD)}
                >{!this.state.seeMore? 'see more':'see less'}</Link>
                </div>}

                {view === 'bookmarks' &&  <div><button className='item-add-btn' onClick={()=>this.context.postMeal(this.props.meal)}>+</button> 
             <button className='item-del-btn'onClick={()=>this.context.handleDeleteBookmark(this.props.meal,index)} >x</button> 
              <Link to={`/bookmark/${this.props.meal.id}`} 
              // onClick={()=>this.context.findMealById(this.props.meal.id, bookmarks)}
              >{!this.state.seeMore? 'see more':'see less'}</Link> {/* have to pass this.props.meal.id here to avoid pkey constraint between md and bm */}
              </div> }
            
           {view === 'large' && this.renderLists(this.props.ingredients,this.props.instructions)}
           
        </li>
      </div>
    )
  }
}