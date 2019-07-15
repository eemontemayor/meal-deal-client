import React, {Component} from 'react';
import './PlannerPage.css'
import Calendar from 'react-calendar'
import MealDeal from '../../components/MealDeal/MealDeal'
import dateFormat from 'dateformat';
import MealApiService from '../../services/meal-api-service'
import MealContext from '../../contexts/MealContext'
export default class PlannerPage extends Component{
    state = {
        value: new Date(),
        MOD:[],
        formattedDate:''
      }
    

onChange = value => {
    const formattedDate=dateFormat(value, 'yyyy-mm-dd')

    this.setState({ value,formattedDate },()=>{
    MealApiService.findMealByDate(formattedDate)
    .then(meals =>{ 
        console.log(meals)
        this.setState({
            MOD:meals
        },()=>{
            console.log(this.state)
            })
        })
    })
}
       

handlePostMeal=(ev)=>{
    ev.preventDefault()

    const on_day = this.state.formattedDate
    console.log(on_day)
    const {meal_name, ingredients} = ev.target
    
    const newMeal = {
      meal_name: meal_name.value,
      ingredients: ingredients.value,
      on_day: on_day, 
      bookmarked: false
    }
 
    MealApiService.postMeal(newMeal)
    .then(meal =>{ 
        console.log(meal)

        this.setState({
            MOD:[...this.state.MOD,newMeal]
        },()=>{
          console.log(this.state.MOD)
        })
    })
    .catch(error => {
        console.log({error})
    })
}

handleDeleteMeal=(meal,index)=>{
    let newMOD = this.state.MOD
    let id=meal.id
    console.log(id, index,'here')
    if(id === undefined){
      delete newMOD[index]
      this.setState({
        MOD:newMOD             
      })
    } else{ 
       
        MealApiService.deleteMeal(meal)
          .then(res =>{
           
            delete newMOD[index]
            this.setState({
              MOD:newMOD
            })
          })
      }
  }


    render(){
        const  value  = {
            day: this.state.value,
            formattedDate:this.state.formattedDate,
            MOD: this.state.MOD,
            handlePostMeal: this.handlePostMeal,
            handleDeleteMeal: this.handleDeleteMeal,
            }
        return(
            <div className='planner-page'>
            <MealContext.Provider value = {value}>
            <Calendar className='calendar'
            onChange={this.onChange}
            value={this.state.value}/>
            {this.state.formattedDate && <MealDeal value={this.state.formattedDate}  />}
           </MealContext.Provider>
            </div>
        )
    }
}



