import React,{Component} from 'react'

export default class Mod extends Component{
   
      render(){
        console.log(this.props.meals)
        const meals=this.props.meals.map((item,index)=>{
            return <li key={index}>{item.meal_name}</li>
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