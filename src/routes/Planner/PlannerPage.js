import React, {Component} from 'react';
import './PlannerPage.css'
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
    console.log(this.state.value)
  
}
       
postMeal=(newMeal)=>{ 
  
    let name =  newMeal.meal_name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
    newMeal.meal_name=name

    newMeal.on_day = this.state.formattedDate
    if(this.state.MOD.length < 4){
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
else{
    return alert('only four meals per day allowed')
}
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
 
    let name =  meal.meal_name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  

    const newBookmark = {
      meal_name:name,
      ingredients: meal.ingredients,
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
           
            }
           
        return(
            <div className='planner-page'>
            <MealContext.Provider value = {value}>
          
            {this.state.value && <MealDeal className='meal-deal-container'value={this.state.value}  />}
           </MealContext.Provider>
            </div>
        )
    }
}



