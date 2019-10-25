import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext'
import MealItem from '../Meal_Item/MealItem.js'

import '../Meal_Item/MealItem.css'
export default class BookMarks extends Component{
   
    static contextType = MealContext

    componentDidMount(){
        console.log(this.context.bookmarks)
    }
    
    list=(bookmarks)=>{
        const bm = bookmarks
       
        if( bm === undefined || bm === []){
          // debugger
          return <li key='0' className='place-holder'>
       
            Add your favorite meals to your bookmarks!
            
            </li>
        }
        else{
          return bm.map((item, index)=>{
            return <MealItem meal={item} key={index} view='bookmarks' cssClass='bm-item'/>
         })
        }
    }

    render(){
       
        // const bookmarks = this.context.bookmarks.map((item,index)=>{
        //     return <li className='bm-item' key={index}><BookmarkItem meal={item} index={index} /></li>

        // })
        return(
            <div className='bm-page'>
                <ul className='bm-list'>
                {this.list(this.context.bookmarks)}
                </ul>
            </div>
        )
    }
}


    