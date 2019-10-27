
import './App.css';
import React, { Component } from 'react'
import {Route, Switch } from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LoginPage from '../../routes/LoginPage.js';
import RegistrationPage from '../../routes/RegistrationPage';
import LandingPage from '../../routes/LandingPage/LandingPage'
import Header from '../Header/Header'
import PlannerPage from '../../routes/Planner/PlannerPage';
import ExplorerPage from '../../routes/ExplorerPage/ExplorerPage';
import ShoppingListPage from '../../routes/ShoppingListPage/ShoppingListPage'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'

export default class App extends Component{
  state={
    hasError: false,
  }
  
  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }



  render(){
    
    return(
      <div>
    
          <Header />
     
        <main className='App__main'>
       
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>

            <PrivateRoute exact path={'/'} component={LandingPage}/>
            
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
                <PrivateRoute
              path={'/planner'}
              component={PlannerPage}
            /> 
             <PrivateRoute
              path={'/planner/:meal_id'}
              render={({history})=>{
                console.log(history,'+++++++')
                return <PlannerPage onClickGoBack={() => history.push('/')} />
              }}
              component={PlannerPage}
            /> 
                <PrivateRoute
              path={'/planner/:bookmark_id'}
              component={PlannerPage}
            /> 
              <PrivateRoute
              path={'/explore'}
              component={ExplorerPage}
            />
            <PrivateRoute
              path={'/shoppinglist'}
              component={ShoppingListPage}
            />
          <Route
              component={NotFoundRoute}
            />
          </Switch>
        </main>

      </div>
    )
  }

}
