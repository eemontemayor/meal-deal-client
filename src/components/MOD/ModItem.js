import React,{Component} from 'react'
import MealContext from '../../contexts/MealContext';
import './Mod.css'
export default class ModItem extends Component{
  state={
      seeMore:false
  }
static contextType = MealContext



  componentDidMount(){
      console.log(this.context.MOD)
  }

seeMore = (meal) =>{
    this.setState({
        seeMore:!this.state.seeMore,
        ingredients:meal.ingredients,
        instructions:meal.instructions,
    
        image:meal.image
    },()=>{
        console.log(this.state)
    })
}
renderMore=()=>{
    let ingList=[]
    let instList=[]
        if(this.state.ingredients){
            let ing = this.state.ingredients
            console.log(ing)
        // let ing = this.state.ingredients.replace(/[{}]/g,'').split(',')
       
         ingList = ing.map((item,index)=>{
            return <li key={index}>{item}</li>
        })
        if(this.state.instructions){
            let inst = this.state.instructions
            console.log(inst)
           
             instList = inst.map((item,index)=>{
                return <li key={index}>{item}</li>
            })
        }
        return( 
        <div>
            {this.state.image ? <img className='bm-img'src={this.state.image} alt='x'/>: null}
            
            <br/>
            <div>
                
            Ingredients:
            <ul className='ing-list'>{ingList}</ul>
            </div>
            <div>

            instructions:
            <ul className='inst-list'>{instList}</ul>
            </div>
        </div>
        )
    }  
}

   

render(){
  
   const index= this.props.index
   const newMeal={
    meal_name:this.props.meal.meal_name,
    ingredients:this.props.meal.ingredients,
    instructions:this.props.meal.instructions,
    image:this.props.meal.image
}
    return(
        <li className= {this.state.seeMore?'mod-item-large':'mod-item'} key={index}onClick={()=>this.seeMore(newMeal)}>
             
        
                {newMeal.meal_name}
                <button className='del-btn'onClick={()=>this.context.handleDeleteMeal(newMeal,index)} >x</button>
                <button className='bm-btn'onClick={()=>this.context.handleAddBookmark(newMeal)}>b</button>
         
            <div>

            {this.state.seeMore && this.renderMore()}
            </div>
           
        </li>
    )
}
}