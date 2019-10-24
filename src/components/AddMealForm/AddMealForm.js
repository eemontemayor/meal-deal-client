import React, {Component} from 'react';
import { Button, Input, Section } from '../Utils/Utils';
import MealContext from '../../contexts/MealContext';
import './AddMealForm.css'


export default class AddMealForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      meal_name: '',
      currentIngredient:'',
      ingredientsList:[],
      currentInstruction:'',
      instructionsList:[],
      on_day:[],
    };
  }
  static contextType = MealContext

  
  handleChange = (e) => {
    this.setState({
    [e.target.name]:e.target.value
    },()=>{
        console.log(this.state)
    })

  }

  handlePostMeal=(ev)=>{
    ev.preventDefault()


    const {meal_name} = ev.target
    
    const newMeal = {
      meal_name: meal_name.value,
      // ingredients:ingredients.value
      ingredients: this.state.ingredientsList,
      instructions:this.state.instructionsList,    
    }

  this.context.postMeal(newMeal)
   
}


handleAddIng=(ev)=>{
 ev.preventDefault()
  this.setState({
    ingredientsList:[this.state.currentIngredient,...this.state.ingredientsList],

  }
  ,()=>{
    this.setState({
      currentIngredient:'',
    })
  
  })
}

renderIngList=()=>{
  let list = []
  if (this.state.ingredientsList){
    list = this.state.ingredientsList.map((item, index)=>{
      return <li key={index}>{item}</li>
    })
  }
  console.log(list, 'ing')
      return list
}

renderInstList=()=>{
  let list = []
  if (this.state.instructionsList){
    list = this.state.instructionsList.map((item, index)=>{
      return <li key={index}>{item}</li>
    })
  }
  console.log(list, 'inst')
  
      return list
}
 


handleAddInst=(ev)=>{
  ev.preventDefault()
   this.setState({
     instructionsList:[this.state.currentInstruction,...this.state.instructionsList],
 
   }
   ,()=>{
     this.setState({
       currentInstruction:'',
     })
   })
 }

    render(){
       const ingList=this.renderIngList()
        const instList=this.renderInstList()
        return(
    <div className='add-meal-page'>
        <form onSubmit={this.handlePostMeal.bind(this)} className='add-meal-form'>

        <Button type='submit' className='form-add-btn'>Add Meal</Button><br/>
                
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
          
            <div className= 'ingredients-input'>
                <label htmlFor='ingredients'>Ingredients
                </label>

              <Input
                value={this.state.currentIngredient}
                name='currentIngredient'
                onChange={this.handleChange}
                
                id='addMealForm_ingredients'>
                  
              </Input>
              <Button onClick={this.handleAddIng.bind(this)}>+</Button>
            </div>
        
           
            <div className= 'instructions-input'>
                <label htmlFor='instructions'>instructions
                </label>

  
              <Input
                value={this.state.currentInstruction}
                name='currentInstruction'
                onChange={this.handleChange}
                >
                  
              </Input>
              <Button onClick={this.handleAddInst.bind(this)}>+</Button>
            </div>
         
            </form>
          <Section  className='ing-list'>
            Ingredients:
            <ul>
            {ingList}
            </ul>

          </Section>
          <Section className='inst-list'>
            Instructions:
            <ul>
       
            {instList}

            </ul>

          </Section>
     </div>  
        )
    }
}