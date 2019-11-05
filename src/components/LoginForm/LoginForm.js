import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Label } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
import UserContext from "../../contexts/UserContext";
import {Button} from "../Utils/Utils";
import {Section} from '../Utils/Utils';
import './LoginForm.css';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  static contextType = UserContext;

  state = { 
    error: null,
    username:'',
    password:'' 
  };

  firstInput = React.createRef();

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = ev.target;


    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        username.value = "";
        password.value = "";
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }
  autoFillForm = () =>{
  
    this.setState({
      username:'demoUser',
      password:'Demopw1!'
    })
  }
  handleChange = (e) => {
    this.setState({
    [e.target.name]:e.target.value
    })
  }
  render() {
    const { error } = this.state;
    return (
      <div className='log-in-form'>
        <div role="alert" className='log-error-container'>{error && <p className='login-error'>{error}</p>}</div>
        <h2 className='log-reg-header log-header'>Login</h2>
        <form className="LoginForm" onSubmit={this.handleSubmit}>
          <div className="login-input">
            <Label htmlFor="login-username-input">Username</Label>
            <Input
              ref={this.firstInput}
              id="login-username-input"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="login-input">
            <label htmlFor="login-password-input">Password</label>
            <Input
              id="login-password-input"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <Section>
          <Button className='log-in-button'type="submit">LOGIN</Button> <br/>
          <Link to="/register" className="login-redirect">
            Need to Sign up?
          </Link><br/>
          <Button className='employer-btn' onClick={this.autoFillForm}>Considering offering me a job?</Button>
          </Section>
        </form>
      </div>
    );
  }
}

export default LoginForm;