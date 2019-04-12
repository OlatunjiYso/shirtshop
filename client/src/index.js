import React from 'react';
import ReactDOM from 'react-dom';

const title = 7 * 765;

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();