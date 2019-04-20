import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';
import setToken from '../helpers/authorization'

import setCurrentUser from '../actions/customers';
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
    authService.signup(user)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      alertify.set('notifier', 'position', 'top-center');
      alertify.success(res.data.message);
      this.props.history.push('/')
      this.props.setCurrentUser({loggedIn: true});
      this.setState({ ...this.state, email: '', password: ''})
    })
    .catch((err) => {
     alertify.set('notifier', 'position', 'top-center');
     alertify.error(err.response.data.message || err.response.data.errors[0]);
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


const mapStateToProps = state => {
  const customerData = state.customers;
  return {
    customerData
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setCurrentUser },
    dispatch
  );
};


Signup.propTypes = {
  history: PropTypes.any,
  customerData: PropTypes.object.isRequired,
  setCurrentUser: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);