
import './App.css';
import React, { Component } from 'react'
import {Route, Switch } from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LoginPage from '../../routes/LoginPage.js';
import RegistrationPage from '../../routes/RegistrationPage';
import LandingPage from '../../routes/LandingPage/LandingPage'
import Header from '../Header/Header'
import PlannerPage from '../../routes/Planner/PlannerPage';
import ExplorerPage from '../../routes/ExplorerPage/ExplorerPage';
import ShoppingListPage from '../../routes/ShoppingListPage/ShoppingListPage'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'
import MealItemPage from '../../routes/MealItemPage/MealItemPage';
import MealContext from '../../contexts/MealContext'
import MealApiService from '../../services/meal-api-service'
import dateFormat from 'dateformat';


export default class App extends Component{
  state={
    hasError: false,
    value: new Date(),
        formattedDate:'',
        MOD:[],
        bookmarks:[],
        searchRes:[],
  }
  
  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
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
    .catch(error => {
      console.log({error})
    })
    })

    MealApiService.getBookmarks()
    .then(meals=>{
        this.setState({
            bookmarks:meals
        })
    })
    .catch(error => {
      console.log({error})
    })
}

  
  
  
  
  
onChange = value => {
    const formattedDate=dateFormat(value, 'yyyy-mm-dd')
  //   let location = config.API_ENDPOINT.replace('api', 'planner')
  //  window.location = location + '/' +formattedDate
    this.setState({ value,formattedDate },()=>{
    MealApiService.findMealByDate(formattedDate)
    .then(meals =>{ 
        this.setState({
            MOD:meals
        })
      })
    })  
}

getUserMOD = () => {
  MealApiService.findMealByDate(this.state.formattedDate)
          .then(meals =>{ 
            this.setState({
                MOD:meals
            })
          })
          .catch(error => {
            console.log({error})
          })
  
}
postMeal=(newMeal)=>{ 
    let name =  newMeal.meal_name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  
    newMeal.meal_name=name

    newMeal.id=undefined

    newMeal.on_day = this.state.formattedDate
    if(this.state.MOD === undefined || this.state.MOD.length < 4){
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
    } else{
      return alert('only 4 meals per day allowed')
    }
}

handleDeleteMeal=(meal,index)=>{
    let newMOD = this.state.MOD
    let id=meal.id
    
    if(id===undefined || !id){

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
  //======================= BOOKMARK CRUD OPERATORS ================================//
  
getUserBookmarks = () => {
    MealApiService.getBookmarks()
    .then(meals=>{
        this.setState({
            bookmarks:meals
        })
    })
    .catch(error => {
      console.log({error})
    })


}

handleAddBookmark=(meal)=>{ //adds to bookmark table in db
  
    let name =  meal.meal_name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

    let list= this.state.bookmarks

    const newBookmark = {
      meal_name:name,
      ingredients: meal.ingredients,
      image:meal.image
    }

    if( list !==undefined) {

    list = list.map(i=> {
        return i.meal_name
    })
    }
  if( list === undefined || !list.includes(newBookmark.meal_name)){
        MealApiService.postBookmark(newBookmark)
        .then(meal =>{ 
  
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
  
    MealApiService.deleteBookmark(meal)
    .then(res =>{
        delete newList[index]
        this.setState({
            bookmarks:newList
        })
    })
}

  

handleUpdateBookmark = (e)=>{
  e.preventDefault()
console.log(e)
  // MealApiService.updateBookmark(bookmark, id)

}
  
  
//======================= HELPER FUNCTIONS ================================//


goBack=()=>{
  this.props.history.push('/')
}
saveSearchResults = (arr) =>{
  this.setState({
      searchRes:[...arr]
  })
}
  render(){
    const  contextValue  = {
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
      getUserBookmarks: this.getUserBookmarks,
      getUserMOD:this.getUserMOD
      // findMealById:this.findMealById,
      // setSelectedMeal:this.setSelectedMeal
      }
    return(
      <div>
     <MealContext.Provider value = {contextValue}> 
          <Header />
     
        <main className='App__main'>
       
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>

            <PrivateRoute exact path={'/'} component={LandingPage}/>
            
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
                <PrivateRoute
              
              path={'/planner'}
              component={PlannerPage}
            /> 


             <PrivateRoute
              
              path={'/planner/:date'}
              component={PlannerPage}
            /> 

              <PrivateRoute
              
              exact path={'/meal/:date/:meal_id'}
              component={MealItemPage}
            /> 

            <PrivateRoute
              exact path={'/bookmark/:bookmark_id'}
             component={MealItemPage}
                
                /> 
                {/* <PrivateRoute
              path={'/bookmark/:bookmark_id'}
              render={({routeProps})=>{
                  
                return <MealItemPage meal={this.state.selectedMeal} {...routeProps} />
              }}
              
              /> 
              */}
              <PrivateRoute
              path={'/explore'}
              component={ExplorerPage}
            />
            <PrivateRoute
              path={'/shoppinglist'}
              component={ShoppingListPage}
            />
          <Route
              component={NotFoundRoute}
            />
          </Switch>
        </main>
        </MealContext.Provider>
      </div>
    )
  }

}
