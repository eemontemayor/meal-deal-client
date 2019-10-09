
import './App.css';
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
// import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LoginPage from '../../routes/LoginPage.js';
import RegistrationPage from '../../routes/RegistrationPage';
// import LandingPage from '../../routes/LandingPage/LandingPage'
import Header from '../Header/Header'
import PlannerPage from '../../routes/Planner/PlannerPage';
// import ExplorerPage from '../../routes/ExplorerPage/ExplorerPage';


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

            {/* <Route exact path={'/'} component={LandingPage}/> */}
            
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
             <Route
              exact path={'/'}
              component={PlannerPage}
            />
                {/* <PrivateRoute
              path={'/planner'}
              component={PlannerPage}
            /> */}
             {/* <PrivateRoute
              path={'/explore'}
              component={ExplorerPage}
            /> */}
          
          </Switch>
        </main>

      </div>
    )
  }

}
