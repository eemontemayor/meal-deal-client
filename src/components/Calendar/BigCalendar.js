import React, { Component } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import dateFormat from 'dateformat';
import './BigCalendar.css'
import MealApiService from '../../services/meal-api-service'
import MealContext from '../../contexts/MealContext'
export default class BigCalendar extends Component {
  state = {
    date: new Date(),
    today: new Date(),
    counter:0
  }
  static contextType = MealContext

  componentDidMount() {
    this.setState({
      counter:this.state.counter+1
    })

    // MealApiService.getUserMeals()
    // .then(meals => {
    //   this.setState({meals})
    // }, () => {
        
    // })
    // .catch(error => {
    //   console.log({error})
    // })

  }





  onChange = date => this.setState({ date })

  filterUserMealsByRange = (minDate, maxDate) => {


    let filteredMeals = this.context.userMeals.filter(item => dateFormat(item.on_day, 'yyyy-mm-dd') > dateFormat(minDate, 'yyyy-mm-dd') && dateFormat(item.on_day, 'yyyy-mm-dd') < dateFormat(maxDate, 'yyyy-mm-dd'))
    // let filteredMeals = meals.filter(item => dateFormat(item.on_day, 'yyyy-mm-dd') > dateFormat(minDate, 'yyyy-mm-dd') && dateFormat(item.on_day, 'yyyy-mm-dd') < dateFormat(maxDate, 'yyyy-mm-dd'))

  
    return filteredMeals
    
  
  }
  filterMealsByDate = (date, arr) => {
    let result = [];
    result = arr.filter(i => dateFormat(i.on_day, 'yyyy-mm-dd') === date)
    return result
  }

  // should sort array and pop to save on Big O 
  sortUserMeals = (meals) => {
    let sorted = meals.slice().sort((a,b) =>new Date(a.on_day) - new Date(b.on_day))
  return sorted
    }
  

  renderTileContent = ({ date, view }) => {
    let d = dateFormat(date, 'yyyy-mm-dd')
    console.log(d,'=====',view)
    let meals = this.props.userMeals



// const filteredMeals = this.filterUserMealsByRange(minDate, maxDate)


    // this way works, but it's wasteful/////////////////
    let tileContentArr = []
      tileContentArr = this.filterMealsByDate(d, meals)

      if (tileContentArr !== undefined && tileContentArr.length > 0) {
  
        let result = []
        for (let i = 0; i < tileContentArr.length; i++){
          let name = tileContentArr[i]['meal_name']
          result.push(<p>{name}</p> )
        }
        return result
      
      }
      
    /////////////////////////
    let maxDate = new Date(this.state.today.getFullYear(),this.state.today.getMonth()+1)
    let minDate = new Date(this.state.today.getFullYear(), this.state.today.getMonth())
    
    
    // let sortedMeals = this.sortUserMeals(filteredMeals)
    
    // let tileContentArr = this.filterMealsByDate(d, sortedMeals)



// let tileContentArr = []
// tileContentArr.push(this.filterMealsByDate(d, meals) ) 
// tileContentArr.length>0 &&console.log(tileContentArr)



    // let top = {}

    // Object.assign(top,sortedMeals.shift())

    
    // if (Object.keys(top).length !== 0 && sortedMeals.length !== 0 && date) {
      

      // let tileContentArr = []
      // for (let i = 0; i < sortedMeals.length; i++){
      //   let mealDate = dateFormat(top.on_day, 'yyyy-mm-dd')


      //   if (d === mealDate) {
      //     console.log(top.on_day, d)
      //     let name = top.meal_name
      //     tileContentArr.push(name)
        
      //     Object.assign(top, sortedMeals.shift())
      //   }
        
      //   return tileContentArr

      
      // }

   
      
     
    
      
      // while (Object.keys(top).length !== 0 && d) {
        
        
        
        // if (d === dateFormat(top.on_day, 'yyyy-mm-dd')) {
        //   console.log(top, d)
        //   let name = top.meal_name
        //   tileContentArr.push(name)
        
        //   Object.assign(top, sortedMeals.shift())
        // }
        
        // return tileContentArr
      // }
    // }
    }
      render() {
  
    // let maxDate = new Date(this.state.today.getFullYear(),this.state.today.getMonth()+1)
    // let minDate = new Date(this.state.today.getFullYear(), this.state.today.getMonth() - 1)
    let maxDate = new Date(this.state.today.getFullYear(),this.state.today.getMonth()+1)
    let minDate=new Date(this.state.today.getFullYear(),this.state.today.getMonth())
   
    
  
    const tileContent = ({ date, view}) => this.renderTileContent({ date, view })

   

    return (
      <div>
        <Calendar
          value={this.state.date}
          
          defaultView='month'
          onClickDay={this.context.onChange}
          calendarType='US'
          onChange={this.onChange}
          minDetail={'month'}
    
          showFixedNumberOfWeeks={false}
          minDate	={minDate}
          maxDate	={maxDate}
       
          tileClassName={({ date, view }) => view === 'month' && date.getDay() === 1 ? 'monday' : null}
        
          tileContent	={tileContent}
         
         
         
         
          // value={this.context.value}
        />
      
      </div>
    );
  }
}