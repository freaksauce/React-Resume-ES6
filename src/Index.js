import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Profile from './components/Profile';
import About from './components/About';
import Work from './components/Work';
import WorkItem from './components/WorkItem';
import Skills from './components/Skills';
import Education from './components/Education';


ReactDOM.render(
  <App source="/dist/resume.json" />, document.getElementById('content')
);
