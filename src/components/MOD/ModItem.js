import React from 'react'

export default function ModItem(props){
  

   function handleClick(){
        console.log(props)
    }
    return(
        <div >
            {props.meal.meal_name}
            <button onClick={props.handleDeleteMeal}>X</button>
        </div>
    )
}