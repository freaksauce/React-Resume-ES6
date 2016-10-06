import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App source="/dist/resume.json" />, document.getElementById('content')
);
