import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'
export default class LandingPage extends Component{
render(){
    return(
        <div className='landing-page'>
            <Link to='/planner' className='landing-page-link'>
                <button className='landing-btn planner-btn'>
                    Plan
                </button> 
            </Link>
            <Link to='/explore' className='landing-page-link'>
            <button className='landing-btn explore-btn'>
               Explore
               
            </button> 
            </Link>
            <Link to='/shoppinglist'className='landing-page-link' >
                <button className='landing-btn shoplist-btn'>
                    Shopping List
                </button> 
            </Link>
        </div>
    )
}

}