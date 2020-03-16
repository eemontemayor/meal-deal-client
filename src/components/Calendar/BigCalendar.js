import React, { Component } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import dateFormat from 'dateformat';
import './BigCalendar.css'
import MealContext from '../../contexts/MealContext'
export default class BigCalendar extends Component {
  state = {
    date: new Date(),
    today: new Date()
  }
  static contextType = MealContext

  componentDidMount() {
    
  }





  onChange = date => this.setState({ date })

  filterUserMeals = (minDate, maxDate) => {

    let meals = this.context.userMeals.filter(item => dateFormat(item.on_day, 'yyyy-mm-dd') > dateFormat(minDate, 'yyyy-mm-dd') && dateFormat(item.on_day, 'yyyy-mm-dd') < dateFormat(maxDate, 'yyyy-mm-dd'))
   
  
    return meals
    
  
  }

  renderTileContent = ({ date, view }) => {
    let d = dateFormat(date, 'yyyy-mm-dd')

    let maxDate = new Date(this.state.today.getFullYear(), this.state.today.getMonth() + 2)
    let minDate = new Date(this.state.today.getFullYear(), this.state.today.getMonth() - 1)
 
    let mealsArr = this.filterUserMeals(minDate, maxDate)
    let top = {}

    
    Object.assign(top, mealsArr.shift())



    console.log(mealsArr)
  //   while (mealsArr.length > 0 && date) {
    
    //   let tileContentArr = []
      
      
    // if (view === 'month' && d === dateFormat(top.on_day, 'yyyy-mm-dd')) {
    //   let name = top.meal_name
    //   tileContentArr.push(name)
    // }
  //     mealsArr.shift()
  //       console.log(tileContentArr, d, '<=======')
  //       console.log(mealsArr)
  //     return tileContentArr
  //   }
  // }
    
}

  render() {
    // console.log(this.context.userMeals)
    // const date = this.state.date
    const tileContent = ({ date, view }) => this.renderTileContent({ date, view })
    // const tileContent = ({ date, view }) => view === 'month' && date.getDay() === 0 ? <p>Sunday!</p> : null;
    let maxDate = new Date(this.state.today.getFullYear(),this.state.today.getMonth()+2)
    let minDate=new Date(this.state.today.getFullYear(),this.state.today.getMonth()-1)
  

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
          // tileClassName={({ date, view }) => view === 'month' && date.getDay() === 6 ? 'saturday' : null}
          tileContent	={tileContent}
         
         
         
          // navigationLabel={({ date, label, locale, view }) => `Current view: ${view}, date: ${date.toLocaleDateString(locale)}`}
          formatLongDate	={(locale, date) => dateFormat(date, 'ddd MMM')}
          onDrillUp={({ activeStartDate, view }) => alert('Drilled up to: ', activeStartDate, view)}	
          // formatShortWeekday={(locale, date) => formatDate(date, 'dd')}
          // value={this.context.value}
        />
      
      </div>
    );
  }
}