import React, { Component } from "react";
import LoginForm from "../components/LoginForm/LoginForm";

class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  render() {
    return (
      <div className='log-page'>
        <div className='log-form-wrapper'>
          
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
         </div>
      </div>
    );
  }
}

export default LoginPage;