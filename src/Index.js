import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
require('bootstrap-loader');
require('font-awesome-webpack-sass');
const json = require('./resume.json');

ReactDOM.render(
  <App jsonObj={json} />,
  document.getElementById('root')
);
