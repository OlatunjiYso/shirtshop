import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';

import setCurrentUser from '../actions/customers';
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
    authService.login(user)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      alertify.set('notifier', 'position', 'top-center');
      alertify.success(res.data.message);
      this.props.history.push('/');
      this.props.setCurrentUser({loggedIn: true});
      this.setState({ ...this.state, email: '', password: ''})
    })
    .catch((err) => {
      alertify.set('notifier', 'position', 'top-center');
      alertify.error(err.response.data.message);
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

Login.propTypes = {
  history: PropTypes.any,
  customerData: PropTypes.object.isRequired,
  setCurrentUser: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
