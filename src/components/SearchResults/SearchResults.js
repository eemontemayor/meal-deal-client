import React,{Component} from 'react'
import MealItem from '../../components/Meal_Item/MealItem'


import './SearchResults.css'

export default class SearchResults extends Component{
    constructor(props) { 
        super(props);
        console.log(this.props); // props will get logged.
      }
   
  
    
   list=(array)=>{
        const res = array
       console.log(res)

          return res.map((item, index)=>{
              return <MealItem
                  
                  meal_name={item.recipe.label}
                  searchResult={true}
                  key={index}
                  image={item.recipe.image}
                  index={index}
                  ingredients={item.recipe.ingredientLines}
                  searchRes={true}
              /> 
         })
        
    }
   
      render(){
            let results = this.context.searchRes
          return(
              
              <ul className='result-list'>
                {this.props.searchResults ? this.list(this.props.searchResults):<li>Explore new meals</li>}
                {/* {this.context.searchRes ? this.list(results):<li>Explore new meals</li>} */}

                
             
            </ul>
     
     )
    }
    
}