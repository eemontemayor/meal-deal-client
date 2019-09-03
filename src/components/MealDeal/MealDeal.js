import React,{Component} from 'react'
import {Section} from '../Utils/Utils'
import dateFormat from 'dateformat';
import AddMealForm from '../AddMealForm/AddMealForm'
import BookMarks from '../BookMarks/BookMarks'
import ExplorerForm from '../ExplorerForm/ExplorerForm'
import './MealDeal.css'
import Calendar from 'react-calendar'

import Mod from '../MOD/MOD'
import MealContext from '../../contexts/MealContext';



export default class MealDeal extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            view:'add-meal-form',
            selected:'add-meal-form'
          
        }
      }
      static contextType = MealContext
    
    

    handleClick=(e)=>{
         
        this.setState({
            view:e.target.id,
            selected:e.target.className,
         
        },()=>{
            console.log(this.state)
        })
   
      }







      
    render(){
        const day = dateFormat(this.props.value, 'mm/dd/yy')
        const formattedDay=dateFormat(day, 'ddd')
 
        return(
         
            <div className='meal-deal-page'>

            <Calendar className='calendar' id='cal'
            onChange={this.context.onChange}
            value={this.context.value}/>  

                <Section  className='mod-container'>
             
                   <p className='meal-date'>
                    {day} - {formattedDay}      
                   </p>
                
                    
                
                    <Mod className='meals-of-day' />
                </Section>

               <Section className='form-container'>

                <div className='form-buttons'>
                    <button className={`add-meal-form-btn ${this.state.view==='add-meal-form'?'highlight':''}`} id='add-meal-form' onClick={this.handleClick} >Add Meal</button>
                    <button className={`bookmarks-btn ${this.state.view==='bookmarks'?'highlight':''}`} id='bookmarks'onClick={this.handleClick}>BookMarks</button>
                    <button className={`explorer-btn ${this.state.view==='explorer'?'highlight':''}`}id='explorer'onClick={this.handleClick}>Explore</button>
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