import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
/* eslint-disable no-unused-vars */
import styles from './styles.css';
/* eslint-enable no-unused-vars */

import NavBar from './components/navbar';
import Footer from './components/footer';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ProductCatalog from './containers/ProductCatalog';
import ProductDetails from './containers/ProductDetails';

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
        <NavBar />
        <div>
          <Switch>
            <Route exact path='/home' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/catalog' component={ProductCatalog} />
            <Route exact path='/' component={ProductDetails} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;