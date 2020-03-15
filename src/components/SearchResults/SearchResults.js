import React from 'react'
import MealItem from '../../components/Meal_Item/MealItem'


import './SearchResults.css'

export default class SearchResults extends React.Component{
    
    state = {
    searchResults:[]
}

    componentDidMount(){
        this.setState({
          searchResults:this.props.searchRes,
        })      
    }
    
    list=(results)=>{
        const res = results
       
        if( res === null ||res === undefined || res === [] || res.length<1){
          // debugger
          return <li key='0' className='place-holder'>
       
            Explore new meal ideas!
            
            </li>
        }
        else{
          return res.map((item, index)=>{
              return <MealItem meal={item} id={item.id} key={index} image={item.image}index={index}   postBookmark={this.context.postBookmark}bookMark={false}/> // violating pkey 
         })
        }
    }
    render() {
        const results = this.state.searchResults || []
         
       
      
        return(
            
            <ul className='result-list'>
            {this.list(results)}
            </ul>
     
     )
    }
}