import React from 'react'
import './CalendarPage.css'
import BigCalendar from '../../components/Calendar/BigCalendar'
export default class CalendarPage extends React.Component{
    render() {
        
        return (
            <div className='calendar-page'>
                <BigCalendar/>
            </div>
            )
        }
}