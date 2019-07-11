import React,{Component} from 'react'
import {Section} from '../Utils/Utils'
import dateFormat from 'dateformat';
import AddMealForm from '../AddMealForm/AddMealForm'
import BookMarks from '../BookMarks/BookMarks'
import Explorer from '../Explorer/Explorer'
export default class MealDeal extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            addMealForm: true,
            bookMarks:false,
            explorer:false,
        };
      }


      

      handleClick=(e)=>{
          
          console.log(e.target.className)
        this.setState({
            addMealForm: false,
            bookMarks:false,
            explorer:false,
        })
   
      }

    render(){
        const day = this.props.value
        const formattedDate=dateFormat(day, 'ddd mm/dd/yy')
       

        console.log(day)
        return(
            <div>
                <Section>
                    {formattedDate}
                </Section>
                <div onClick={this.handleClick}>

                    <button className='addMealForm' >Add Meal</button>
                    <button className='bookMarks'>BookMarks</button>
                    <button className='explorer'>Explore</button>
                
                    {this.state.addMealForm && <AddMealForm/>}
                    {this.state.bookMarks &&  <BookMarks/>}
                    {this.state.explorer &&  <Explorer/>}
                </div>
            </div>
        )
    }
}