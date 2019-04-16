import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserHistory } from 'react-router';
import App from './app';

import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';

ReactDOM.render(
  <Router history={BrowserHistory}>
    <App />
  </Router>,
 
  document.getElementById('app')
);

module.hot.accept();