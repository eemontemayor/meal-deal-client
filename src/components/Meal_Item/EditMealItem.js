import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';
import PropTypes from 'prop-types';

import './MealItem.css'
import MealApiService from '../../services/meal-api-service';
import MealItem from './MealItem'
import { Button, Input, Section } from '../Utils/Utils';

export default class EditMealItem extends Component{
    // static propTypes = {
    //     match: PropTypes.shape({
    //       params: PropTypes.object,
    //     }),
    //     history: PropTypes.shape({
    //       push: PropTypes.func,
    //     }).isRequired,
    //   };


      static contextType = MealContext;

      state = {
       meal_name:null,
       ingredients:null,
       instructions:null,
      };



      componentDidMount() {
        const { bookmark_id } = this.props.match.params
        debugger
        MealApiService.findMealByDate(bookmark_id)
        
          .then(res => {
            if (!res.ok)
              return res.json().then(error => Promise.reject(error))
    
            return res.json()
          })
          .then(meal => {
            this.setState({
              meal_name: meal.meal_name,
              ingredients: meal.ingredients,
              instructions: meal.instructions,
            
            })
          })
          .catch(error => {
            console.error(error)
            this.setState({ error })
          })
      }
    
      handleSubmit = (bookmark) => {
        // this.setState({ error: null })
        const { bookmark_id } = this.props.match.params

        // MealApiService.updateBookmark(x , bookmark_id )

      
        //   .then(() => {
        //     callback(callback)
        //     this.context.updateBookmark(bookmark)
        //     this.props.history.push('/')
        //   })
        //   .catch(error => {
        //     console.error(error)
        //     this.setState({ error })
        //   })
      }
    


      handleClickCancel = () => {
        this.props.history.push('/')
      };
    
      handleChange = (e) => {
        this.setState({
        [e.target.name]:e.target.value
        },()=>{
            console.log(this.state)
        })
    
      }

      render(){
          const meal = this.state.meal
          return(
            <div className='edit-meal-page'>
                <form
                 onSubmit={this.handleSubmit}
                 onCancel={this.handleClickCancel}
                 >
                     <Input
                 type="text"
                 name='meal_name'
                 onChange={this.handleChange}
                 required
                 />
                
               <Input
                 type="text"
                 name='ingredients'
                 onChange={this.handleChange}
                 required
                 />
               <Input
                 type="text"
                 name='instructions'
                 onChange={this.handleChange}
                 required
                 />
          
                </form>
                <MealItem meal={meal}/>
            </div>
          )
      }
}