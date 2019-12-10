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


    componentDidMount(){
      this.setState({
        searchResults:this.context.searchRes,
      })      
    }

    handleChange = (e) => {
        this.setState({
          searchTerm: e.target.value
        });
      }


    handleExplorerSubmit = e => {
        e.preventDefault()
      // console.log(this.state)
        MealApiService.getExplorerMeals(this.state.searchTerm)
          .then(res => {
            this.setState({
                searchResults: res
               
              },()=>{
          
                if(!this.props.expPage){
                  this.context.saveSearchRes(this.state.searchResults)

                }
              })
          })
      }
      

    render(){
      console.log(this.props)
        return(
            <>
              <h1>
                Search For New Meal Ideas!
                </h1>
                <div className='explorer_form'>
            <form className='searchForm'onSubmit={this.handleExplorerSubmit}>           
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
         
            <Button className='submit-search-btn' type='submit'>
              Search
            </Button>
          </form>
             {this.state.searchResults && <SearchResults expPage={this.props.expPage} postBookmark={this.props.postBookmark}results={this.state.searchResults}/>} 
          
        
            </div>
            </>
        )
    }
}