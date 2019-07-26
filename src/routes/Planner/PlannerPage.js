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
        formattedDate:'',
        bookmarks:[],
      }
    
  componentDidMount(){
    MealApiService.getBookmarks()
    .then(meals=>{
        this.setState({
            bookmarks:meals
        },()=>{
            console.log(this.state)
        })
    })
  }

onChange = value => {
    const formattedDate=dateFormat(value, 'yyyy-mm-dd')
   
    this.setState({ value,formattedDate },()=>{
    MealApiService.findMealByDate(formattedDate)
    .then(meals =>{ 
        this.setState({
            MOD:meals
        })
        })
    })
  
}
       
postMeal=(newMeal)=>{ 
    newMeal.on_day = this.state.formattedDate

    MealApiService.postMeal(newMeal)
    .then(res =>{ 

        MealApiService.findMealByDate(this.state.formattedDate)
        .then(meals =>{ 
            this.setState({
                MOD:meals
            })
        })
    })
    .catch(error => {
        console.log({error})
    })
}




handleDeleteMeal=(meal,index)=>{
    let newMOD = this.state.MOD
    let id=meal.id
    
    if(id === undefined){
        console.log('_______________________')
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

  handleAddBookmark=(meal)=>{ //adds to bookmark table in db
 
    const newBookmark = {
      meal_name: meal.meal_name,
      ingredients: meal.ingredients,
    }

    MealApiService.postBookmark(newBookmark)
    .then(meal =>{ 
        console.log(meal)
        MealApiService.getBookmarks()
        .then(meals=>{
            this.setState({
                bookmarks:meals
            })
        })
    })
    .catch(error => {
        console.log({error})
    })
}

handleDeleteBookmark=(meal,index)=>{
    let newList = this.state.bookmarks
   console.log(meal)
    MealApiService.deleteBookmark(meal)
    .then(res =>{
        delete newList[index]
        this.setState({
            bookmarks:newList
        })
    })
}




    render(){
        const  value  = {
            day: this.state.value,
            formattedDate:this.state.formattedDate,
            MOD: this.state.MOD,
            bookmarks:this.state.bookmarks,
            handleDeleteMeal: this.handleDeleteMeal,
            handleAddBookmark:this.handleAddBookmark,
            handleDeleteBookmark:this.handleDeleteBookmark,
            postMeal:this.postMeal,
       

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



