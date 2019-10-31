import React from 'react'
import './MealItemPage.css'
import MealApiService from '../../services/meal-api-service'
import MealItem from '../../components/Meal_Item/MealItem'
export default function MealItemPage(props){


   
        console.log(props)

        return(
            <div className='meal-item-page'><button className='back-btn' onClick={()=>props.history.goBack()}>back</button>
            <MealItem meal={props.meal} cssClass={'bm-item'} seeMore='true' />
            </div>
            )
        }
