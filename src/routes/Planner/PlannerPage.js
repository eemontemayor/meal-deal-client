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

handleDeleteMeal=(meal, mealNum)=>{
    let newMOD = this.state.MOD
    console.log(meal, mealNum,'here')
    // if(meal.id === undefined){
    //   delete newMOD[mealNum]
    //   this.setState({
    //     MOD:newMOD             
    //   })
    // } else{ 
       
    //     MealApiService.deleteMeal(meal)
    //       .then(res =>{
           
    //         delete newMOD[mealNum]
    //         this.setState({
    //           MOD:newMOD
    //         })
    //       })
    //   }
  }


    render(){
        const { value } = this.state;
        return(
            <div className='planner-page'>

            <Calendar className='calendar'
            onChange={this.onChange}
            value={value}/>
            {this.state.formattedDate && <MealDeal value={this.state.formattedDate} 
                                                    mod={this.state.MOD} 
                                                    handlePostMeal={this.handlePostMeal}
                                                    handleDeleteMeal={this.handleDeleteMeal} />}
            </div>
        )
    }
}



