import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <Link
        onClick={this.handleLogoutClick}
        to='/login'>
        Logout
      </Link>
    )
  }

  renderLoginLink() {
    return (
      <div>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Sign up</Link>
      </div>
    )
  }

 

  renderGreeting() {
    return TokenService.hasAuthToken() && window.innerWidth > 760
    ? <p id='user-name'>Hi {this.context.user.name}!</p>
    : ''
  }

  render() {
    return (
    <div className='main-header'>
        <nav>
          <h1>
            <Link to='/'>
              <span className='meal'>MEAL</span>
              <span className='deal'>DEAL</span>
            </Link>
          </h1>
          <div className='nav-links'>
            
            <NavLink to='/shoppinglist'>
          
          <FontAwesomeIcon className='icon shopping' size='1x' icon = 'shopping-basket'/>
            </NavLink>

            <NavLink to='/calendar'>
            
            <FontAwesomeIcon className='icon cal' size='1x' icon='calendar-alt' />
              </NavLink>
              {/* <NavLink to='/explorer'>
              
            <FontAwesomeIcon className='icon search' size='1x' icon='search' />
              </NavLink>
              <NavLink to='/bookmarks'>
          <FontAwesomeIcon className='icon bookmark' size='1x' icon = 'bookmark'/>
    
              </NavLink> */}
              {this.renderGreeting()}
             
              {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          
          </div>
        </nav>
      </div>
    );
  }
}

export default Header