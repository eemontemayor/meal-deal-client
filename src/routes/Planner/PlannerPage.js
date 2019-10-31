import React, {Component} from 'react';
import './PlannerPage.css'
import {Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/Utils/PrivateRoute'
import Planner from '../../components/Planner/Planner'
import dateFormat from 'dateformat';
import MealApiService from '../../services/meal-api-service'
import MealContext from '../../contexts/MealContext'
import MealItemPage from '../MealItemPage/MealItemPage'
export default class PlannerPage extends Component{
    state = {
        value: new Date(),
        MOD:[],
        formattedDate:'',
        bookmarks:[],
        
        selectedMeal:{},
        searchRes:[],
      }
    
  componentDidMount(){

    //turn this into an async Promise.all?
    const formattedDate=dateFormat(this.state.value, 'yyyy-mm-dd')
    this.setState({formattedDate },()=>{
    MealApiService.findMealByDate(formattedDate)
    .then(meals =>{ 
        this.setState({
            MOD:meals
        })
        })
    })

    MealApiService.getBookmarks()
    .then(meals=>{
        this.setState({
            bookmarks:meals
        },()=>{
        //  console.log(this.state)
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
    // console.log(this.state.value)
  
}
       
postMeal=(newMeal)=>{ 
  
    let name =  newMeal.meal_name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
    newMeal.meal_name=name

    newMeal.on_day = this.state.formattedDate
    if(this.state.MOD.length < 6){
    MealApiService.postMeal(newMeal, this.state.formattedDate)
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
else{
    return alert('only 6 meals per day allowed')
}
}

handleUpdateBookmark = (e)=>{
    e.preventDefault()
  console.log(e)
    // MealApiService.updateBookmark(bookmark, id)

}


goBack=()=>{
    this.props.history.push('/planner')
}


handleDeleteMeal=(meal,index)=>{
    let newMOD = this.state.MOD
    let id=meal.id
    
    if(id===undefined || !id){
        console.log('if', index)

      delete newMOD[index]
      this.setState({
        MOD:newMOD             
      })
    } else{ 
        console.log('else', index)
        // MealApiService.deleteMeal(id,this.state.formattedDate)
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
 
    let name =  meal.meal_name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  

    const newBookmark = {
      meal_name:name,
      ingredients: meal.ingredients,
      image:meal.image
    }

    const list = this.state.bookmarks.map(i=> {
        return i.meal_name
    })
 
   if(!list.includes(newBookmark.meal_name)){
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
    }else{
        alert('Meal already in bookmarks!')
    }
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

saveSearchResults = (arr) =>{
    this.setState({
        searchRes:[...arr]
    })
}

findMealById=(id, list)=>{
    console.log(id)
    let meal 
    meal = list.filter(i => i.id === id)
    this.setState({
        seeMealItem:false,
        selectedMeal:[]
    },()=>{
        this.setState({
            seeMealItem:!this.state.seeMealItem,
            selectedMeal:meal[0]
        })
        // console.log(bookmark , 'from find bm by id func')
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
            onChange:this.onChange,
            searchRes:this.state.searchRes,
            saveSearchRes:this.saveSearchResults,
            goBack:this.goBack,
            handleUpdateBookmark:this.handleUpdateBookmark,
            findMealById:this.findMealById,
            }
           
        return(
            <div className='planner-page'>
            <MealContext.Provider value = {value}>
          
            {this.state.value && <Planner value={this.state.value}  />}
          {this.state.seeMealItem && <MealItemPage meal={this.state.selectedMeal}/>}
           </MealContext.Provider>
            </div>
        )
    }
}



