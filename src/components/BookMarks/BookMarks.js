import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext'
import MealItem from '../Meal_Item/MealItem.js'
import './BookMarks.css'
import '../Meal_Item/MealItem.css'
export default class BookMarks extends Component{
   
    static contextType = MealContext

    componentDidMount(){
        this.context.getUserBookmarks()
      
    }
    
    list=(bookmarks)=>{
        const bm = bookmarks
       
        if( bm === undefined || bm === [] || bm.length<1){
          // debugger
          return <li key='0' className='place-holder'>
       
            Add your favorite meals to your bookmarks!
            
            </li>
        }
        else{
          return bm.map((item, index)=>{
            return <MealItem  meal={item} id={item.id} key={index} index={index}view='bookmarks' cssClass='bm-item'/> // violating pkey 
         })
        }
    }

    render(){
       
    
        return(
            <div className='bm-page'>
                <ul className='bm-list'>
                {this.list(this.context.bookmarks)}
                </ul>
            </div>
        )
    }
}


    