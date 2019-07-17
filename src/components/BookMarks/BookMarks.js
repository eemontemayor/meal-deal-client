import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext'
import BookmarkItem from './BookmarkItem'

export default class BookMarks extends Component{
   
    static contextType = MealContext

   

    render(){
       
        const bookmarks = this.context.bookmarks.map((item,index)=>{
            return <li key={index}><BookmarkItem meal={item} index={index} /></li>

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


    