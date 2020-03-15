import React from 'react'
import MealItem from '../../components/Meal_Item/MealItem'


import './SearchResults.css'

export default function SearchResults(props){
    console.log(props,'++++++++++++++++++++')
   
  
    
  const list=(array)=>{
        const res = array
       console.log(res)

          return res.map((item, index)=>{
              return <MealItem
                  meal={item.recipe}
                  searchResult={true}
                  key={index}
                  image={item.recipe.image}
                  index={index}
              /> 
         })
        
    }
   
      
        return(
            
            <ul className='result-list'>
            {props.searchResults ? list(props.searchResults):<li key='0' className='place-holder'>
       
       Explore new meal ideas!
       
       </li> }
            </ul>
     
     )
    
}