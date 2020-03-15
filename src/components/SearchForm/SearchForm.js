import React from 'react'
import MealApiService from '../../services/meal-api-service'
import MealContext from '../../contexts/MealContext'
import './SearchForm.css'
export default class SearchForm extends React.Component {
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


    handleSearchSubmit = e => {
        e.preventDefault()
        console.log('here')
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
    render() {
        
        return (
            
            <form className='searchForm'onSubmit={this.handleSearchSubmit}>           
    <div className='searchTerm'onChange={this.handleChange.bind(this)}>
      <label htmlFor='search_search_term'>
        Search for:
      </label>
      <input
        required
        type="search"
        name='searchTerm'
        id='search_search_term'>
      </input>
    </div>
 
    <button className='submit-search-btn' type='submit'>
      Search
    </button>
  </form>
        )
    }
}