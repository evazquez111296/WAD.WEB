import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import App from './App.js'
import './index.css';
const config=require('./config.json')
window.App=config
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
