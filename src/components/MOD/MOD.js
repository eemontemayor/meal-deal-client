import React,{Component} from 'react'
import MealItem from '../Meal_Item/MealItem'
import MealContext from '../../contexts/MealContext'
import '../Meal_Item/MealItem.css'
import './Mod.css'
import dateFormat from 'dateformat';
import AddMealForm from '../../components/AddMealForm/AddMealForm'

export default class MOD extends Component{
   
  static contextType = MealContext


 async componentDidMount(){
    // console.log(this.context.formattedDate)
   await this.context.getUserMOD()

}


    list=(meals)=>{
      
  
      if( meals === undefined || meals === [] || meals.length <1 ){
      
        return <li key='0'
          // className='meal-item mod'
        >
     
        
          <AddMealForm/>
          </li>
      } else if (meals.length < 3) {
        let form = <li key='0'><AddMealForm/></li> 
        let mod = meals.map((item, index) => (
          <MealItem meal={item} key={index} index={index} image={item.image} mod={true} />
          ))
          let result=<>{form} {mod}</>
          
return result
      }
      else{
        return meals.map((item, index) => {
          return <MealItem meal={item} key={index} index={index} image={item.image}mod={true}/>
       })
      }
   
    
  }
      render(){
        const ModList = this.list(this.context.MOD)
        const date = dateFormat(this.context.day,'mm/dd')
          return(
            <>
              <p className = 'mod-day'>
                  {date} 
                </p>
                  <ul className='mod-list'>
                  {/* { ModList} */}
                {this.list(this.context.MOD)}
              </ul>
                <p className = 'mod-day'>
                  {date} 
                </p>
            </>
           
   
    )
}
}