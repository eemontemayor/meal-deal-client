import React, {Component} from 'react';
import './PlannerPage.css'
import Calendar from 'react-calendar'
export default class PlannerPage extends Component{
    state = {
        value: new Date(),
      }
    
      onChange = value => {

          this.setState({ value })
          console.log(this.state)
        }

    render(){
        const { value } = this.state;

        return(
            <Calendar className='calendar'
            onChange={this.onChange}
            value={value}/>
        )
    }
}