import React,{Component} from 'react'
// import ExplorerForm from '../../components/ExplorerForm/ExplorerForm'
import MealApiService from '../../services/meal-api-service'
export default class ExplorerPage extends Component{

    state={
        bookmarks:[]
    }

    componentDidMount(){

    MealApiService.getBookmarks()
    .then(meals=>{
        this.setState({
            bookmarks:meals
        },()=>{
         console.log(this.state)
        })
    })
    }
   
 postBookmark=(meal)=>{ //had to add this function because explorer page does not have access to context
 
        let name =  meal.meal_name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
    
        const newBookmark = {
          meal_name:name,
          ingredients: meal.ingredients,
          image:meal.image
        }
    
        const list = this.state.bookmarks.map(i=> {
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

        return(
            <div>
            {/* <ExplorerForm expPage={this.props.match.path} postBookmark={this.postBookmark}/> */}
        </div>
    )
}
}