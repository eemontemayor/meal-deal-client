import React, {Component} from 'react';
import { Button, Input } from '../Utils/Utils';
import MealContext from '../../contexts/MealContext';
import './AddMealForm.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
    })
  }

  handlePostMeal=(ev)=>{
    ev.preventDefault()


    const {meal_name} = ev.target
    
    const newMeal = {
      meal_name: meal_name.value,
      // ingredients: this.state.ingredientsList,
      // instructions:this.state.instructionsList,    
    }

    this.context.postMeal(newMeal)
      this.setState({meal_name:''})
     
 
   
}


handleAddIng=(ev)=>{
 ev.preventDefault()
  this.setState({
    ingredientsList:[...this.state.ingredientsList,this.state.currentIngredient],

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
      return list
}

renderInstList=()=>{
  let list = []
  if (this.state.instructionsList){
    list = this.state.instructionsList.map((item, index)=>{
      return <li key={index}>{item}</li>
    })
  }
  
      return list
}
 


handleAddInst=(ev)=>{
  ev.preventDefault()
   this.setState({
     instructionsList:[...this.state.instructionsList,this.state.currentInstruction],
 
   }
   ,()=>{
     this.setState({
       currentInstruction:'',
     })
   })
 }

    render(){
      //  const ingList=this.renderIngList()
      //   const instList=this.renderInstList()
        return(
    // <div className='add-meal-page'>
        <form onSubmit={this.handlePostMeal.bind(this)} className='add-meal-form'>

                
            <div className='add_meal_form'>
              <label htmlFor='addMealForm_meal_name'>
                Meal Name
              </label><br/>
              <Input
                type="text"
                name='meal_name'
                value={this.state.meal_name}
                onChange={this.handleChange}
                required
                >
              </Input>
            </div>

            <Button type='submit' className='form-add-btn'>
            {" "}
            <FontAwesomeIcon className="icon plus" size="1x" icon="plus" />
              
              </Button>
{/*           
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
            
        
           
      
         
            
          <Section  className='add-meal-ing-list'>
           
            <ul>
            {ingList}
            </ul>

          </Section>
          </div>
          <div className= 'instructions-input'>
                <label htmlFor='instructions'>Instructions
                </label>

  
              <Input
                value={this.state.currentInstruction}
                name='currentInstruction'
                onChange={this.handleChange}
                >
                  
              </Input>
              <Button onClick={this.handleAddInst.bind(this)}>+</Button>
          <Section className='add-meal-inst-list'>
          
            <ul>
       
            {instList}

            </ul>

          </Section>
            </div> */}
          </form>
    //  </div>  
        )
    }
}