import React,{Component} from 'react'
import ModItem from './ModItem.js'
import MealContext from '../../contexts/MealContext'
import './Mod.css'
export default class Mod extends Component{
   
  static contextType = MealContext

    list=(mod)=>{
      const meal = mod
      if(meal.length === 0 || meal === undefined){
        
        return <li className='place-holder'>
     
          Add a meal to this day!
          
          </li>
      }
      else{
        return meal.map((item, index)=>{
          return <li className='mod-item'key={index}><ModItem meal={item} index={index}/></li>
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