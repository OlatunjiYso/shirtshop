import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import setCurrentUser from '../actions/customers';
import AppNav from '../components/Navbar';

/**
 * @class NavBar
 * 
 * @extends React.Component
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.logout = this.logout.bind(this);
  }

  /**
   * @description logs out a user
   * 
   * @memberof NavBar
   */
  logout() {
    localStorage.removeItem('token');
    this.props.setCurrentUser({loggedIn: false});
    this.props.history.push('/');
  }

  /**
   * @description renders the nav bar
   * 
   * @memberof NavBar component
   */
  render() {
    const { loggedIn } = this.props.customerData.customer;
    return (
      <div>
        <AppNav
          logout={this.logout}
          loggedIn={loggedIn}
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


NavBar.propTypes = {
  customerData: PropTypes.object.isRequired,
  setCurrentUser: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));