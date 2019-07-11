import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'
export default class LandingPage extends Component{
render(){
    return(
        <div>
           <button className='planner-btn'>
               <Link to='/planner' >Plan</Link>
            </button> 
            <button className='explorer-btn'>
               <Link to='/explore' >Explore</Link>
            </button> 
        </div>
    )
}

}