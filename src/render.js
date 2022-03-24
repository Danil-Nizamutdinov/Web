import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

export let render = (state, addPost) => ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App state={state} addPost={addPost}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);