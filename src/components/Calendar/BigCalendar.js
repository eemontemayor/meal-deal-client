import React, { Component } from 'react';
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
import formatDate from 'dateformat';
import './BigCalendar.css'
import MealContext from '../../contexts/MealContext'
export default class BigCalendar extends Component {
  state = {
    date: new Date(),
    today:new Date()
  }
  static contextType = MealContext

  componentDidMount(){
    // this.setState({
    //   today:new Date()
    // })
    console.log(this.state.date)
    console.log(formatDate(this.state.today, "W"));
  }





  onChange = date => this.setState({ date }, () => {
   console.log(date.getDay(),'<<<')
    console.log(this.state.date,'<-state.date')
  })



  render() {
    // const date = this.state.date
    // const date= this.context.day
      const weekNumber=formatDate(this.state.today, "W")
    return (
      <div>
        <Calendar
          value={this.state.date}
          
          defaultView='month'
          onClickDay={(value,locale, event) => console.log('Clicked day: ',  value.toLocaleDateString(locale))}
          calendarType='US'
          onChange={this.onChange}
          maxDetail={'month'}
          // showNavigation={false}
          // showWeekNumbers={true}
          showFixedNumberOfWeeks={false}
          minDate	={new Date(this.state.today.getFullYear(),this.state.today.getMonth()-1)}
          maxDate	={new Date(this.state.today.getFullYear(),this.state.today.getMonth()+2)}
       
          tileClassName={({ date, view }) => view === 'month' && date.getDay() === 1 ? 'monday' : null}
          // tileClassName={({ date, view }) => view === 'month' && date.getDay() === 6 ? 'saturday' : null}
          tileContent	={({ activeStartDate, date, view }) => view === 'month' && date.getDay() === 0 ? <p className='tile-text'>It's Sunday!</p> : null}
         
         
         
          // navigationLabel={({ date, label, locale, view }) => `Current view: ${view}, date: ${date.toLocaleDateString(locale)}`}
          formatLongDate	={(locale, date) => formatDate(date, 'ddd MMM')}
          onDrillUp={({ activeStartDate, view }) => alert('Drilled up to: ', activeStartDate, view)}	
          // formatShortWeekday={(locale, date) => formatDate(date, 'dd')}
          // value={this.context.value}
        />
      
      </div>
    );
  }
}