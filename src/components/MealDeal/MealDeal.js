import React,{Component} from 'react'
import {Section} from '../Utils/Utils'
import dateFormat from 'dateformat';
import AddMealForm from '../AddMealForm/AddMealForm'
import BookMarks from '../BookMarks/BookMarks'
import Explorer from '../Explorer/Explorer'
import './MealDeal.css'
import MealApiService from '../../services/meal-api-service'
import MOD from '../MOD/MOD'
export default class MealDeal extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            view:'add-meal-form',
            MOD:[]
        }
      }

    
      componentDidMount(){
    //     const date = dateFormat(this.props.value, 'mm/dd/yy')
    //       console.log(date)
    //     MealApiService.findMealByDate(date)
    //     .then(res =>{ 
    //         console.log(res)
    //         // this.setState({
    //         //   MOD:[...res]
    //         // })
    //   })
    }
      
    handleClick=(e)=>{
          console.log(e.target.className)
        this.setState({
            view:e.target.className
        })
   
      }

      handlePostMeal=(ev)=>{
        ev.preventDefault()

        const on_day = dateFormat(this.props.value, 'mm/dd/yy')
        const {meal_name, ingredients} = ev.target
        
        const newMeal = {
          meal_name: meal_name.value,
          ingredients: ingredients.value,
          on_day: on_day, 
          bookmarked: false
        }
     
        MealApiService.postMeal(newMeal)
        .then(res =>{ 
            console.log(res)

        //   this.setState({
        //     MOD:[...this.state.MOD,res.meal]
        //   })
       
        })
    .catch(error => {
      console.log({error})
      })
      }






      
    render(){
        const day = this.props.value
        const formattedDay=dateFormat(day, 'ddd')

        const formattedDate=dateFormat(day, 'mm/dd/yy')
       
        return(
            <div>
                <Section className='meal-date'>
                    {formattedDay}
                    {formattedDate}
                    
                </Section>
                <Section className='meals-of-day'>
                    <MOD meals={this.state.MOD}/>
                </Section>
                {/* <div onClick={this.handleClick}> */}
                <div >
                    <button className='add-meal-form' >Add Meal</button>
                    <button className='bookmarks'>BookMarks</button>
                    <button className='explorer'>Explore</button>
                
                    {this.state.view==='add-meal-form' && <AddMealForm date={formattedDate} handlePostMeal={this.handlePostMeal}/>}
                    {this.state.view==='bookmarks' &&  <BookMarks/>}
                    {this.state.view==='explorer' &&  <Explorer/>}
                </div>
               
            </div>
        )
    }
}