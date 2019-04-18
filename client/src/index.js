import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserHistory } from 'react-router';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';

import App from './app';
import store from './store';



ReactDOM.render(
  <Provider store={store}>
    <Router history={BrowserHistory}>
    <App />
  </Router>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();