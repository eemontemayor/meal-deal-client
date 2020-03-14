import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext'
import MealItem from '../../components/Meal_Item/MealItem.js'
import './BookMarksPage.css'
import '../../components/Meal_Item/MealItem.css'

export default class BookMarksPage extends Component {
   
    static contextType = MealContext

    componentDidMount() {
        this.context.getUserBookmarks()
      
    }
    
    listBM = (bookmarks) => {
        const bm = bookmarks
       
        if (bm === undefined || bm === [] || bm.length < 1) {
            // debugger
            return <li key='0' className='place-holder'>
       
                Add your favorite meals to your bookmarks!
                
            </li>
        }
        else {
            return bm.map((item, index) => {
                return <MealItem meal={item} id={item.id} key={index} index={index} view='bookmarks' cssClass='bm-item' /> // violating pkey 
            })
        }
    }

    render() {
       
    
        return (
            <div className='bm-page'>
                <ul className='bm-list'>
                    {this.listBM(this.context.bookmarks)}
                </ul>
            </div>
        )
    }
}