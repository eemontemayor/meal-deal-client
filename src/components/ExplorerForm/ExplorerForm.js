import React,{Component} from 'react'
import MealApiService from '../../services/meal-api-service'
import MealContext from '../../contexts/MealContext'
import {Input,Button} from '../Utils/Utils'
import SearchResults from '../SearchResults/SearchResults';
export default class Explorer extends Component{

    state={
        searchTerm:'',
        searchResults:[],
        date:'',
    }

    static contextType = MealContext


    handleChange = (e) => {
        this.setState({
          searchTerm: e.target.value
        },()=>{
            console.log(this.state)
        });
      }


    handleSubmit = e => {
        e.preventDefault()
      
        MealApiService.getExplorerMeals(this.state.searchTerm)
          .then(res => {
            this.setState({
                searchResults: res.hits
               
              })
          })
      }
    render(){
        return(
            <div><h1>
                EXPLORER
                </h1>
                <div className='explorer_form'>
            <form onSubmit={this.handleSubmit}>           
            <div className='searchTerm'onChange={this.handleChange.bind(this)}>
              <label htmlFor='explorer_search_term'>
                Search for:
              </label>
              <input
                required
                type="search"
                name='searchTerm'
               
                id='explorer_search_term'>
              </input>
            </div>
            {/* <div className='dishType'>
              <label htmlFor='dishType'>MealType
              </label>
                <select>
                    <option value="null">...</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option>
                </select>
              </div>
              <div className='cuisineType'>
              <label htmlFor='cuisineType'>Cuisine Type
              </label>
                <Input
                name="cuisineType"
                id="BrowserForm_cuisine_search"
                placeholder="e.g. Mexican"
                >
                </Input>
              </div> */}
            <Button type='submit'>
              Search
            </Button>
          </form>
             {this.state.searchResults && <SearchResults results={this.state.searchResults}/>} 
            {/* <MealBrowserResults showMod={this.props.showMod}results={searchResults} date={date} /> */}
          
        
            </div>
            </div>
        )
    }
}