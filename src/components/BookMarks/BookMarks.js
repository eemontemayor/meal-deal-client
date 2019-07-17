import React,{Component} from 'react'
import MealApiService from '../../services/meal-api-service'
import MealContext from '../../contexts/MealContext'
export default class BookMarks extends Component{
    state={
        bookmarks:[]
    }
    static contextType = MealContext

    componentDidMount(){
        MealApiService.getBookmark()
        .then(meals=>{
            this.setState({
                bookmarks:meals
            })
        })
    }
    render(){
        const bookmarks = this.state.bookmarks.map((item,index)=>{
            return <li key={index}>{item.meal_name}</li>

        })
        return(
            <div>
                <ul>

            {bookmarks}
            </ul>
            </div>
        )
    }
}


    