import React,{Component} from 'react'
import {Section} from '../Utils/Utils'
import dateFormat from 'dateformat';
import AddMealForm from '../AddMealForm/AddMealForm'
import BookMarks from '../BookMarks/BookMarks'
import Explorer from '../Explorer/Explorer'
import './MealDeal.css'
import Mod from '../Mod/Mod'
import MealContext from '../../contexts/MealContext';


export default class MealDeal extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            view:'add-meal-form',
          
        }
      }
      static contextType = MealContext
    
    

    handleClick=(e)=>{
          console.log(e.target.className)
        this.setState({
            view:e.target.className
        })
   
      }







      
    render(){
        const day = dateFormat(this.props.value, 'mm/dd/yy')
        const formattedDay=dateFormat(day, 'ddd')
       
        return(
            <div>
                <Section className='meal-date'>
                    {formattedDay}
                    {day}
                    
                </Section>
                <Section className='meals-of-day'>
                    <Mod  />
                </Section>
                {/* <div onClick={this.handleClick}> */}
                <div>
                    <button className='add-meal-form' >Add Meal</button>
                    <button className='bookmarks'>BookMarks</button>
                    <button className='explorer'>Explore</button>
                
                    {this.state.view==='add-meal-form' && <AddMealForm date={day} handlePostMeal={this.context.handlePostMeal}/>}
                    {this.state.view==='bookmarks' &&  <BookMarks />}
                    {this.state.view==='explorer' &&  <Explorer/>}
                </div>
               
            </div>
        )
    }
}