import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
import store from './store';
import setToken from './app/helpers/authorization';
import setCurrentCustomer from './app/actions/customers';
if (localStorage.token) {
  setToken(localStorage.token);
  store.dispatch(setCurrentCustomer({loggedIn: true}));
} else {
  store.dispatch(setCurrentCustomer({loggedIn: false}));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
