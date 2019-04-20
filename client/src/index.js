import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserHistory } from 'react-router';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
import store from './store';
import setToken from './helpers/authorization'
import setCurrentCustomer from './actions/customers'

if (localStorage.token) {
  console.log('I am always called', localStorage.token)
  setToken(localStorage.token);
  store.dispatch(setCurrentCustomer({loggedIn: true}));
} else {
  console.log('no token', localStorage.token)
  store.dispatch(setCurrentCustomer({loggedIn: false}));
}


import App from './app';




ReactDOM.render(
  <Provider store={store}>
    <Router history={BrowserHistory}>
    <App />
  </Router>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();