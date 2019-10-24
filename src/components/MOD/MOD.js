import React,{Component} from 'react'
import ModItem from './ModItem.js'
import MealContext from '../../contexts/MealContext'
import './Mod.css'
export default class Mod extends Component{
   
  static contextType = MealContext

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
          return <ModItem meal={item} key={index}/>
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