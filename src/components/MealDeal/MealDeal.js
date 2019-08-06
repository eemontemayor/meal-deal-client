import React,{Component} from 'react'
import {Section} from '../Utils/Utils'
import dateFormat from 'dateformat';
import AddMealForm from '../AddMealForm/AddMealForm'
import BookMarks from '../BookMarks/BookMarks'
import ExplorerForm from '../ExplorerForm/ExplorerForm'
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
         
            <div className='meal-deal-page'>
                <Section className='meal-date'>
                   {/* <p className='day'> */}
                   {day}<br/>
                   {/* </p>  */}
                    {/* <p className='format-date'> */}
                    {formattedDay}
                    {/* </p> */}
                    
                </Section>
                <Section className='meals-of-day'>
                    <Mod  />
                </Section>

               <Section className='form-container'>

                <div className='form-buttons'>
                    <button className='add-meal-form' onClick={this.handleClick} >Add Meal</button>
                    <button className='bookmarks'onClick={this.handleClick}>BookMarks</button>
                    <button className='explorer'onClick={this.handleClick}>Explore</button>
                </div>
                <div className='form-box'>
                    {this.state.view==='add-meal-form' && <AddMealForm date={day} />}
                    {this.state.view==='bookmarks' &&  <BookMarks />}
                    {this.state.view==='explorer' &&  <ExplorerForm/>}
                </div>
               </Section>
               </div>
           
        )
    }
}