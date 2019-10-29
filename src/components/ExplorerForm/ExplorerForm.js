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
        },()=>{
            console.log(this.state)
        });
      }


    handleExplorerSubmit = e => {
        e.preventDefault()
      console.log(this.state)
        MealApiService.getExplorerMeals(this.state.searchTerm)
          .then(res => {
            console.log(res.hits)
            this.setState({
                searchResults: res.hits
               
              },()=>{
          
                if(!this.props.expPage){
                  this.context.saveSearchRes(this.state.searchResults)

                }
              })
          })
      }
      AddResultItemToBookmarks=(meal)=>{ //adds to bookmark table in db
                                          // gonna have to fix this .... or change context schema
 
        let name =  meal.meal_name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
    
        const newBookmark = {
          meal_name:name,
          ingredients: meal.ingredients,
          image:meal.image
          // and other stuff
        }
    
        const list = this.context.bookmarks.map(i=> {
            return i.meal_name
        })
     
       if(!list.includes(newBookmark.meal_name)){
            MealApiService.postBookmark(newBookmark)
            .then(meal =>{ 
                console.log(meal)
                MealApiService.getBookmarks()
                .then(meals=>{
                    this.setState({
                        bookmarks:meals
                    })
                })
            })
            .catch(error => {
                console.log({error})
            })
        }else{
            alert('Meal already in bookmarks!')
        }
    }

    render(){
      console.log(this.props)
        return(
            <>
              <h1>
                EXPLORER
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
             {this.state.searchResults && <SearchResults expPage={this.props.expPage} results={this.state.searchResults}/>} 
          
        
            </div>
            </>
        )
    }
}