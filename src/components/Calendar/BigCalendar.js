import React, { Component } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import dateFormat from 'dateformat';
import './BigCalendar.css'
// import MealApiService from '../../services/meal-api-service'
import MealContext from '../../contexts/MealContext'
export default class BigCalendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      today: new Date(),
     
    }

}
  static contextType = MealContext

  async componentDidMount() {
   await this.context.getUserMeals()
    await this.context.getUserMOD()
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

  filterUserMealsByRange = (minDate, maxDate,meals) => {
    let filteredMeals
    if (meals) {
      
       filteredMeals = meals.filter(item => dateFormat(item.on_day, 'yyyy-mm-dd') > dateFormat(minDate, 'yyyy-mm-dd') && dateFormat(item.on_day, 'yyyy-mm-dd') < dateFormat(maxDate, 'yyyy-mm-dd'))
    }

  
    return filteredMeals
    
  
  }
    // should sort array and pop to save on Big O 
    sortUserMeals = (meals) => {
   
      
      let sorted = meals.slice().sort((a, b) => new Date(a.on_day) - new Date(b.on_day))
  
        return sorted
     
      }
  filterMealsByDate = (date, arr) => {
    let result = [];
  
        // date=new Date(date)
    result = arr.filter(i => {
      // dateFormat(i.on_day, 'yyyy-mm-dd') ===  dateFormat(date, 'yyyy-mm-dd') && console.log(dateFormat(i.on_day, 'yyyy-mm-dd'), '==='  ,dateFormat(date, 'yyyy-mm-dd'),'>',i.meal_name )
      return dateFormat(i.on_day, 'yyyy-mm-dd') === dateFormat(date, 'yyyy-mm-dd')
    })
    // console.log( date,'date', result,"result") 
    return result
    
  }


  

   renderTileContent = ({ date, view },arr) => {
    let d = dateFormat(date, 'yyyy-mm-dd')

    let meals = arr

    let maxDate = new Date(this.state.today.getFullYear(),this.state.today.getMonth()+2)
    let minDate = new Date(this.state.today.getFullYear(), this.state.today.getMonth()-1)

     
    //  if (meals !== undefined) {
        
      
const filteredMeals =  this.filterUserMealsByRange(minDate, maxDate,meals)
const sortedMeals = this.sortUserMeals(filteredMeals)

    // this way works, but it seems wasteful/////////////////
    let tileContentArr
      tileContentArr = this.filterMealsByDate(d, sortedMeals)

      if (tileContentArr !== undefined ) {
  
        let result = []
        for (let i = 0; i < tileContentArr.length; i++){
          let name = tileContentArr[i]['meal_name']
          result.push(<p>{name}</p> )
        }
       
        return result
      
      }
      
    /////////////////////////
  // }
   
    }
      render() {
  
 
    let maxDate = new Date(this.state.today.getFullYear(),this.state.today.getMonth()+2)
    let minDate=new Date(this.state.today.getFullYear(),this.state.today.getMonth()-1)
   
    
    let mealArr = this.context.userMeals
    const tileContent = ({ date, view}) => this.renderTileContent({ date, view },mealArr)

   

    return (
      <div>
        <Calendar
          value={this.state.date}
          
          // value={this.context.day}

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
         
       
         
         
        />
      
      </div>
    );
  }
}