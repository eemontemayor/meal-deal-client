import React from 'react'
import ResultItem from './ResultItem'
import './SearchResults.css'

export default function SearchResults(props){

    const results=props.results.map((item,index)=>{
        return <li key={index}><ResultItem expPage={props.expPage}meal={item} postBookmark={props.postBookmark}/></li>
    })

    return(
        <div className='results-container'>
            <ul className={props.expPage?'search-results exp-page':'search-results'}>
            {results}
            </ul>
        </div>
    )
}