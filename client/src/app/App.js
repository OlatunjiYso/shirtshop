import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
/* eslint-disable no-unused-vars */
import styles from './styles.css';
/* eslint-enable no-unused-vars */

import NavBar from './containers/NavBar';
import Footer from './components/Footer';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ProductCatalog from './containers/ProductCatalog';
import ProductDetails from './containers/ProductDetails';
import Checkout from './components/Checkout'
import Cart from './containers/Cart';
import NotFound from './components/NotFound';

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
        <main>
          <Switch>
            <Route exact path='/home' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/' component={ProductCatalog} />
            <Route exact path='/product/:id' component={ProductDetails} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/cart' component={Cart} />
            <Route component={NotFound}/>
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;