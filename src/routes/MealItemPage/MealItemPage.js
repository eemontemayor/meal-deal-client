import React,{Component} from 'react'
import './MealItemPage.css'
import MealApiService from '../../services/meal-api-service'
import MealItem from '../../components/Meal_Item/MealItem'
import MealContext from '../../contexts/MealContext'
export default class MealItemPage extends Component{
    state={
        meal:{}
    }
    static contextType = MealContext
    componentDidMount(){
        // this.setState({
        //     meal:this.context.selectedMeal
        // })
        console.log(this.props.match.params.bookmark_id)
        MealApiService.findBookmarkById(this.props.match.params.bookmark_id)
        .then(meal =>{
            this.setState({
                meal:meal[0],
                selectedMeal:this.context.selectedMeal
            },()=>{
                console.log(this.state)
            })
        })
    }
   
        render(){
            const meal = this.state.meal
            console.log(meal.meal_name)
            return(
                
                
                <div className='meal-item-page'><button className='back-btn' onClick={()=>this.props.history.goBack()}>back</button>
            <MealItem meal={meal} cssClass={'bm-item'} id='item-selected' view='large' />
            </div>
            
            )
        }
    }
