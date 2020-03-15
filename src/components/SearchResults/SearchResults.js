import React from 'react'
import MealItem from '../../components/Meal_Item/MealItem'


import './SearchResults.css'

export default function SearchResults(props){
    console.log(props,'++++++++++++++++++++')
   
  
    
  const list=(...results)=>{
        const res = results
       console.log(res)

          return res.map((item, index)=>{
              return <MealItem meal={item.recipe} searchResult={true }key={index} image={item.recipe.image}index={index}   postBookmark={this.context.postBookmark}bookMark={false}/> // violating pkey 
         })
        
    }
   
      
        return(
            
            <ul className='result-list'>
            {props.searchRes ? list(props.searchRes):<li key='0' className='place-holder'>
       
       Explore new meal ideas!
       
       </li> }
            </ul>
     
     )
    
}