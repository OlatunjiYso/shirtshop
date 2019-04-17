import React, { Component } from "react";

import SignupForm from '../components/signup';

import authService from '../service/authService';

/**
 * @class Signup
 * 
 * @extends React.Component
 */
class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   /**
   * @description listens to changes in the input field
   * 
   * @param { object } event - event object
   * @memberof Signup
   */
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      ...this.state, [name]: value
    })
  }

  /**
   * @description sends data to the backend and received response
   * 
   * @param { object } event  event object
   * 
   * @memberof Signup
   */
  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    authService.signup(user);
    this.setState({
      ...this.state, email: '', password: '', name: '', confirmPassword: ''
    })
  }

  /**
   * @description renders the Signup page
   * 
   * @memberof Signup component
   */
  render() {
    const { password, confirmPassword } = this.state;
    const passwordMisMatched = ( password != confirmPassword && confirmPassword.length > 0 )
    return (
      <div>
        <SignupForm
          user={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          passwordCheck = {passwordMisMatched}
        />
      </div>
    );
  }
}


export default Signup;