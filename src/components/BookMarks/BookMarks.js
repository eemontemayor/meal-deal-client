import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext'
import MealItem from '../Meal_Item/MealItem.js'
import './BookMarks.css'
import '../Meal_Item/MealItem.css'
import MealApiService from '../../services/meal-api-service'
export default class BookMarks extends Component{
   
    static contextType = MealContext

    componentDidMount(){
        // this.context.getUserBookmarks()
        MealApiService.getBookmarks()
            .then(this.context.setBookmarkList)
            .catch(this.setError)
    }
    
    renderBookmarkList=()=>{
        const bm = this.context.bookmarks
       
        if( bm === undefined || bm === [] || bm.length<1){
          // debugger
          return <li key='0' className='place-holder'>
       
            Add your favorite meals to your bookmarks!
            
            </li>
        }
        else{
          return bm.map((item, index)=>{
              return <MealItem meal={item} id={item.id} key={index} image={item.image}index={index} bookMark={true}/> // violating pkey 
         })
        }
    }

    render(){
       
        const {error} = this.context
        return(
            <>
                    <h4 className='bm-title'>BOOKMARKS</h4><br/>
                <ul className='bm-list'>

                  {error
          ? <p className='red'>There was an error, try again</p>
          :this.renderBookmarkList()}
                </ul>
       </>
        )
    }
}


    