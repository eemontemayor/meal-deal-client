import React,{Component} from 'react'
import {Section} from '../Utils/Utils'
import dateFormat from 'dateformat';
import AddMealForm from '../AddMealForm/AddMealForm'
import BookMarks from '../BookMarks/BookMarks'
import Explorer from '../Explorer/Explorer'
import './MealDeal.css'
export default class MealDeal extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            view:'add-meal-form'
        };
      }

    
      

      handleClick=(e)=>{
          console.log(e.target.className)
        this.setState({
            view:e.target.className
        })
   
      }






      
    render(){
        const day = this.props.value
        const formattedDate=dateFormat(day, 'ddd mm/dd/yy')
       

        console.log(day)
        return(
            <div>
                <Section className='meal-date'>
                    {formattedDate}
                </Section>
               
                <div onClick={this.handleClick}>

                    <button className='add-meal-form' >Add Meal</button>
                    <button className='bookmarks'>BookMarks</button>
                    <button className='explorer'>Explore</button>
                
                    {this.state.view==='add-meal-form' && <AddMealForm/>}
                    {this.state.view==='bookmarks' &&  <BookMarks/>}
                    {this.state.view==='explorer' &&  <Explorer/>}
                </div>
                <Section className='meals-of-day'>
                    
                </Section>
            </div>
        )
    }
}