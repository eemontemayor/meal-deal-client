import React, { Component } from "react";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import './RegistLoginPage.css'
class RegistrationPage extends Component {

  static defaultProps = {
    history: {
      push: () => {},
    }
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <div className='reg-page'>
        <div className='reg-form-wrapper'>

        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
          />
          </div>
      </div>
    );
  }
}

export default RegistrationPage;