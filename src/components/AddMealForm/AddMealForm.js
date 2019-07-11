import React, {Component} from 'react';
import { Button, Input, Textarea } from '../Utils/Utils';



export default class AddMealForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      meal_name: '',
      ingredients:'',
      on_day:[],
    };
  }
  
  handleChange = (e) => {
    this.setState({
    [e.target.name]:e.target.value
    },()=>{
        console.log(this.state)

    });

  }



 

    render(){
 
      
        return(
          <div>
            <form>
             
            <div className='add_meal_form'>
              <label htmlFor='addMealForm_meal_name'>
                Meal Name
              </label>
              <Input
                type="text"
                name='meal_name'
                onChange={this.handleChange}
                required
                >
              </Input>
            </div>
            <div className='dishType'>
              <label htmlFor='dishType'>Meal Type
              </label>
                <select>
                    <option value="null">...</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="other">Other</option>
                </select>
              </div>
                <div className= 'ingredients'>
                <label htmlFor='ingredients'>Ingredients

                </label><br/>

              <Textarea
                
                name='ingredients'
              
                id='addMealForm_ingredients'>
              </Textarea>
                </div>
            <Button type='submit'>
              Add Meal
            </Button>
          </form>
          </div>  
        )
    }
}