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
   
    if(this.props.match.params.bookmark_id){
        console.log(this.props.match.params.bookmark_id)

         
         MealApiService.findBookmarkById(this.props.match.params.bookmark_id)
         .then(meal =>{
             
             console.log(meal[0])
       
             this.setState({
                 selectedMeal:meal[0],
                 cssClass:'bm-item'
                })
            })
            .catch(error =>{
                console.error({error})
            })
        }
        if(this.props.match.params.meal_id){

            console.log(this.props.match.params.meal_id,'<<<<<<<<<<<<<<<<<<<<<<,<<<')
         MealApiService.findMealById(this.props.match.params.meal_id, this.context.formattedDate)
         .then(meal =>{
             
             console.log(meal[0])
             
             
             this.setState({
                 selectedMeal:meal[0],
                 cssClass:'mod-item'
                })
            })
            .catch(error =>{
                console.error({error})
            })
        }   
    }


   
        render(){
            const meal = this.state.selectedMeal
            
            return(
                
                
                <div className='meal-item-page'><button className='back-btn' onClick={()=>this.props.history.goBack()}>back</button>
            { meal && <MealItem 
            // id={meal.id} 
            meal={meal} meal_name={meal.meal_name}image={meal.image}ingredients={meal.ingredients}cssClass={this.state.cssClass} id='item-selected' view='large' />}
            
            
            </div>
            
            )
        }
    }
