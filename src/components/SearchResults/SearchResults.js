import React from 'react'
import MealItem from '../MealItem/MealItem'
export default function SearchResults(props){
    console.log(props.results)

    const results=props.results.map((item,index)=>{
        return <li key={index}><MealItem meal={item}/></li>
    })

    return(
        <div>
            <ul className='search-results'>
            {results}
            </ul>
        </div>
    )
}