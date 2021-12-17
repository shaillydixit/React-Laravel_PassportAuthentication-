import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './common/Header';
import axios from 'axios';

// set main base url
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
// bearer token save
axios.defaults.headers.common['Authorization']='Bearer'+localStorage.getItem('token');
ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
