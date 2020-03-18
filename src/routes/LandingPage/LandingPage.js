import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './LandingPage.css'
export default class LandingPage extends Component{
render(){
    return(
        <div className='landing-page'>
        
            <Link to='/planner' className='landing-btn planner-btn'>
             
                    Plan
             
            </Link>
            {/* <Link to='/explore' className='landing-btn explore-btn'>
           
               Explore
               
            
            </Link> */}
            <Link to='/shoppinglist'className='landing-btn shoplist-btn' >
                
                    Shopping List
                
            </Link>
        </div>
    )
}

}