import React from 'react'
import ResultItem from './ResultItem'


export default function SearchResults(props){

    const results=props.results.map((item,index)=>{
        return <li key={index}><ResultItem meal={item}/></li>
    })

    return(
        <div>
            <ul className='search-results'>
            {results}
            </ul>
        </div>
    )
}