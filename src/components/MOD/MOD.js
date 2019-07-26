import React,{Component} from 'react'
import ModItem from './ModItem.js'
import MealContext from '../../contexts/MealContext'
import './Mod.css'
export default class Mod extends Component{
   
  static contextType = MealContext
      render(){
    
      
        const meals=this.context.MOD.map((item, index)=>{
             return <li className='mod-item'key={index}><ModItem meal={item} index={index}/></li>
        })
          return(
              <div className='mod-page'>
                  <ul className='mod-list'>
                    {meals}
                  </ul>
           
        </div>
    )
}
}