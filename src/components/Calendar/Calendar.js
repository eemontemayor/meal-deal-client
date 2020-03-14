import React, { Component } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import dateFormat from 'dateformat';
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
           showDoubleView='true'
           view='week'
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}