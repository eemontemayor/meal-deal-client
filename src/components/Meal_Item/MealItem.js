import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';
import {Link } from 'react-router-dom';
import './MealItem.css'


export default class MealItem extends Component{
  state={
    seeMore:false,
    ingredients:[],
    instructions:[],
    image:''
  }
static contextType = MealContext



  componentDidMount(){
    //   console.log(this.context.MOD)
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
            <div className='lists'>
                
            <h6>Ingredients:</h6>
            <ul className='ing-list'>{ingList}</ul>
         


            <h6>Instructions:</h6>
            <ul className='inst-list'>{instList}</ul>
            </div>
        </div>
        )
    }  
}

   

render(){
    const view = this.props.view

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
        <li
        className= {this.props.cssClass} id={this.state.seeMore ? `item-selected`: undefined} 
        key={index}
      
        >
             
                {view === 'meals-of-day'&& <div><button className='item-bm-btn'onClick={()=>this.context.handleAddBookmark(meal)}>b</button>
                <button className='item-del-btn'onClick={()=>this.context.handleDeleteMeal(this.props.meal,index)} >x</button>
                <Link to={`/planner/meal/${this.props.meal.id}`}onClick={()=>this.seeMore(meal)}>{this.state.seeMore? 'see less':'see more'}</Link></div>}

                {view === 'bookmarks' &&  <div><button className='item-add-btn' onClick={()=>this.context.postMeal(meal)}>+</button> 
             <button className='item-del-btn'onClick={()=>this.context.handleDeleteBookmark(this.props.meal,index)} >x</button>   <Link to={`/planner/bookmark/${this.props.meal.id}`}onClick={()=>this.seeMore(meal)}>{this.state.seeMore? 'see less':'see more'}</Link></div> }
            <p className='meal-name'>{meal.meal_name}</p> 
            <div>
            {/* <button onClick={()=>this.seeMore(meal)}>{this.state.seeMore? 'see less':'see more'}</button>
            {this.state.seeMore && this.renderMore()} */}
          
            </div>
           
        </li>
    )
}
}