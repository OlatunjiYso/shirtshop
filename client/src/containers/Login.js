import React, { Component } from "react";

import LoginForm from '../components/login';

import authService from '../service/authService';

/**
 * @class Login
 * 
 * @extends React.Component
 */
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @description listens to changes in the input field
   * 
   * @param { object } event - event object
   * @memberof Login
   */
  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      ...this.state, [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    authService.login(user);
    this.setState({
      ...this.state, email: '', password: ''
    })

  }

  /**
   * @description renders the Login page.
   * 
   * @memberof Login component
   */
  render() {
    return (
      <div>
        <LoginForm
          user={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Login;