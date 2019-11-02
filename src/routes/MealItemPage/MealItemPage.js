import React,{Component} from 'react'
import './MealItemPage.css'
import MealApiService from '../../services/meal-api-service'
import MealItem from '../../components/Meal_Item/MealItem'
import MealContext from '../../contexts/MealContext'
export default class MealItemPage extends Component{
    state={
        selectedMeal:[]
    }
    static contextType = MealContext
    componentDidMount(){
    //   console.log(this.context.selectedMeal,'selected Meal from mip')
        console.log(this.props.match.params.bookmark_id)
     
        
        MealApiService.findBookmarkById(this.props.match.params.bookmark_id)
        .then(meal =>{
            
            console.log(meal[0])

            // this.context.setSelectedMeal(meal)
            this.setState({
                    selectedMeal:meal[0]
                })
            })
                .catch(error =>{
                    console.error({error})
                  })
            
            
    }


   
        render(){
            const meal = this.state.selectedMeal
            const m = this.context.selectedMeal
            console.log(meal.meal_name,'<-----------')
            // console.log(m[0])
            return(
                
                
                <div className='meal-item-page'><button className='back-btn' onClick={()=>this.props.history.goBack()}>back</button>
            { meal && <MealItem id={meal.id} meal={meal} meal_name={meal.meal_name}image={meal.image}ingredients={meal.ingredients}cssClass={'bm-item'} id='item-selected' view='large' />}
            
            
            </div>
            
            )
        }
    }
