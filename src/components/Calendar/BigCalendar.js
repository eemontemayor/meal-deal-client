import React, { Component } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import formatDate from 'dateformat';
import './Calendar.css'

export default class BigCalendar extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  

  render() {
    return (
      <div>
        <Calendar
          onClickDay={(value, event) => alert('Clicked day: ', value)}
          maxDetail	='month'
           tileClassName={({ date, view }) => view === 'month' && date.getDay() === 3 ? 'saturday' : null}
          //  showDoubleView='true'
          formatShortWeekday={(locale, date) => formatDate(date, 'dd')}
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}