import React,{Component} from 'react'
import MealItem from '../Meal_Item/MealItem'
import MealContext from '../../contexts/MealContext'
import '../Meal_Item/MealItem.css'
import './Mod.css'
export default class Mod extends Component{
   
  static contextType = MealContext


  componentDidMount(){
    // console.log(this.context.formattedDate)
    this.context.getUserMOD()

}


    list=(meals)=>{
      
  
      if( meals === undefined || meals === [] || meals.length <1 ){
      
        return <li key='0' className='place-holder'>
     
          Add a meal to this day!
          
          </li>
      }
      else{
        return meals.map((item, index)=>{
          return <MealItem  meal={item} key={index} index={index}view='meals-of-day' cssClass='mod-item' />
       })
      }
   
    
  }
      render(){
        const ModList = this.list(this.context.MOD)
    
          return(
              <div className='mod-page'>
                  <ul className='mod-list'>
                  { ModList}
                   
                  </ul>
           
        </div>
    )
}
}