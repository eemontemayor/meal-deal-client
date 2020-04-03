import React,{Component} from 'react'
import './MealItemPage.css'
// import { Link } from "react-router-dom";
import MealApiService from '../../services/meal-api-service'
import MealContext from '../../contexts/MealContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class MealItemPage extends Component{
    state={
        selectedMeal:[],
        type:''
    }
    static contextType = MealContext
    componentDidMount(){

   
    if(this.props.match.params.bookmark_id){
        console.log(this.props.match.params.bookmark_id)

         
         MealApiService.findBookmarkById(this.props.match.params.bookmark_id)
         .then(meal =>{
             
             console.log(meal[0])
       
             this.setState({
                 selectedMeal:meal[0],
                //  type:'Bookmark'
                })
            })
            .catch(error =>{
                console.error({error})
            })
        }
        if(this.props.match.params.meal_id){

       
         MealApiService.findMealById(this.props.match.params.meal_id
            , this.props.match.params.date
            )
         .then(meal =>{
             
             console.log(meal[0])
             
             
             this.setState({
                 selectedMeal:meal[0],
                //  type:'mod'
                })
            })
            .catch(error =>{
                console.error({error})
            })
        }   
    }

    handleEditClick=()=>{alert('edit meal feature coming soon')}

    renderMeal = (meal) => {
        return (
          <>
                <img className='meal-page-pic'src={meal.image} alt='x'/>
            <div className='meal-page-info-container'>
                <h1 className = 'meal-page-name'>
                    {meal.meal_name}
                </h1>
                  {/* <Link to='/edit'> */}
                <button className='edit-btn'onClick={this.handleEditClick}>
                    Edit
                  </button>
                    {/* </Link> */}
               {this.renderLists(meal.ingredients, meal.instructions)}
            </div>
            </>
        )
    }


  renderLists = (ingList, instList) => {
    let newIngList = ingList;
    // let newInstList = instList;

    if (!!(newIngList && newIngList.length)) {
    
      newIngList = newIngList.split(',').map((item, index) => {
        return <li key={index}>{item}</li>;
      });
    } else {
      newIngList = <li key={0}>'No ingredients saved for this item'</li>;
    }

    // if (newInstList !== null) {
    //   newInstList = newInstList.map((item, index) => {
    //     return <li key={index}>{item}</li>;
    //   });
    // } else {
    //   newInstList = <li key={0}>'No instructions saved for this item'</li>;
    // }

    return (
      <>
      
        
          <ul className="meal-page-ing-list">
            INGREDIENTS:
            {newIngList}
          </ul>
          {/* <ul className="inst-list">
            INSTRUCTIONS:
            {newInstList}
          </ul> */}
        </>
    
    );
  };
   
        render(){
            const meal = this.state.selectedMeal
            
            return(
                
                
                <div className='meal-item-page'>
                  <button className='back-btn' onClick={()=>this.props.history.goBack()}> <FontAwesomeIcon
                className="icon chevron-left"
                size="1x"
                icon="chevron-left"
              /></button>
        {meal && this.renderMeal(meal)}
            
            
            </div>
            
            )
        }
    }
