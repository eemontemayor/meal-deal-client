import React,{Component} from 'react'
import MealItem from '../Meal_Item/MealItem'
import MealContext from '../../contexts/MealContext'
import '../Meal_Item/MealItem.css'
export default class Mod extends Component{
   
  static contextType = MealContext


  componentDidMount(){
    console.log(this.context.MOD)
}



    list=(mod)=>{
      const meal = mod
      console.log(meal)
      if( meal === undefined || meal === []){
        // debugger
        return <li key='0' className='place-holder'>
     
          Add a meal to this day!
          
          </li>
      }
      else{
        return meal.map((item, index)=>{
          return <MealItem meal={item} key={index} view='meals-of-day' cssClass='mod-item'/>
       })
      }
   
    
  }
      render(){
          return(
              <div className='mod-page'>
                  <ul className='mod-list'>
                    {this.list(this.context.MOD)}
                  </ul>
           
        </div>
    )
}
}