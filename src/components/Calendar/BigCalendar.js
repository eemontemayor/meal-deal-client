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
    today: new Date()
  }
  static contextType = MealContext

  componentDidMount() {
    MealApiService.getUserMeals()
    .then(meals => {
      this.setState({meals})
    })
    .catch(error => {
      console.log({error})
    })

  }





  onChange = date => this.setState({ date })

  filterUserMeals = (minDate, maxDate) => {


    let filteredMeals = this.context.userMeals.filter(item => dateFormat(item.on_day, 'yyyy-mm-dd') > dateFormat(minDate, 'yyyy-mm-dd') && dateFormat(item.on_day, 'yyyy-mm-dd') < dateFormat(maxDate, 'yyyy-mm-dd'))
    // let filteredMeals = meals.filter(item => dateFormat(item.on_day, 'yyyy-mm-dd') > dateFormat(minDate, 'yyyy-mm-dd') && dateFormat(item.on_day, 'yyyy-mm-dd') < dateFormat(maxDate, 'yyyy-mm-dd'))

  
    return filteredMeals
    
  
  }


  sortUserMeals = (meals) => {
    let sorted = meals.slice().sort((a,b) =>new Date(a.on_day) - new Date(b.on_day))
  return sorted
    }
  

  renderTileContent = ({ date, view }) => {
    let d = dateFormat(date, 'yyyy-mm-dd')

    let maxDate = new Date(this.state.today.getFullYear(),this.state.today.getMonth()+1)
    let minDate=new Date(this.state.today.getFullYear(),this.state.today.getMonth())
    const filteredMeals = this.filterUserMeals(minDate, maxDate)
    
    let sortedMeals = this.sortUserMeals(filteredMeals)
    let top = {}

    Object.assign(top,sortedMeals.shift())

    
    if (Object.keys(top).length !== 0) {
     
    
      
      //   while (mealsArr.length > 0 && date) {
        
        let tileContentArr = []
        
        
      if (d === dateFormat(top.on_day, 'yyyy-mm-dd')) {
        console.log(top,d)
          let name = top.meal_name
          tileContentArr.push(name)
        }
        //     mealsArr.shift()
        //       console.log(tileContentArr, d, '<=======')
        //       console.log(mealsArr)
            return tileContentArr
        //   }
        // }
        
      }
      
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