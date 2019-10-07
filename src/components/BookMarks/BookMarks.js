import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext'
import BookmarkItem from './BookmarkItem'
import './BookMarks.css'
export default class BookMarks extends Component{
   
    static contextType = MealContext

   

    render(){
       
        // const bookmarks = this.context.bookmarks.map((item,index)=>{
        //     return <li className='bm-item' key={index}><BookmarkItem meal={item} index={index} /></li>

        // })
        return(
            <div className='bm-page'>
                <ul className='bm-list'>
                    {this.context.bookmarks && this.context.bookmarks.map((item,index)=>{
            return <li className='bm-item' key={index}><BookmarkItem meal={item} index={index} /></li>

        })}
                </ul>
            </div>
        )
    }
}


    