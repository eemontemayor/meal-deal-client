import React,{Component} from 'react'
import ModItem from './ModItem.js'
export default class Mod extends Component{
   
      render(){
        console.log(this.props.meals)
        const meals=this.props.meals.map((item, index)=>{
             return <li key={index}><ModItem meal={item}/></li>
        })
          return(
              <div>
                  <ul>
                    {meals}
                  </ul>
           
        </div>
    )
}
}