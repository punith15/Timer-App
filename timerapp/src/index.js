import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'


setInterval(()=>{
  ReactDOM.render(
    <App/>,
  document.getElementById('root')
  )
},1000)
