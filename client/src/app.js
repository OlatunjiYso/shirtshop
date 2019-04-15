import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable no-unused-vars */
import styles from './styles.css';
/* eslint-enable no-unused-vars */

import Nav from './components/navbar';
import Footer from './components/footer';
import Current from './components/catalogSideNav';
class App extends Component {

  /**
   *  @description this method returns the entire jsx representation of the application.
   * @returns {JSX} JSX
   * 
   * @memberof App Component 
   */
  render() {
      return (
          <div>
            <Nav />
            <Current />
            <Footer />
          </div>
      )

  }
}

App.propTypes = {
  name: PropTypes.string
}


export default App;