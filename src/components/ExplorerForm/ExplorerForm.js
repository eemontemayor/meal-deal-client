import React,{Component} from 'react'
import MealApiService from '../../services/meal-api-service'
import MealContext from '../../contexts/MealContext'
import {Input,Button} from '../Utils/Utils'
import SearchResults from '../SearchResults/SearchResults';
import './ExplorerForm.css'
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
               
              },()=>{console.log(res)})
          })
      }
    render(){
        return(
            <>
              <h1>
                EXPLORER
                </h1>
                <div className='explorer_form'>
            <form onSubmit={this.handleSubmit}>           
            <div className='searchTerm'onChange={this.handleChange.bind(this)}>
              <label htmlFor='explorer_search_term'>
                Search for:
              </label>
              <Input
                required
                type="search"
                name='searchTerm'
               
                id='explorer_search_term'>
              </Input>
            </div>
         
            <Button type='submit'>
              Search
            </Button>
          </form>
             {this.state.searchResults && <SearchResults results={this.state.searchResults}/>} 
          
        
            </div>
            </>
        )
    }
}