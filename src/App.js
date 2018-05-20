import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Routes from './router/router'
// import {bg} from '../img/app'

class App extends Component {
  render() {
    // let url_bg = require('./img/bg.jpg')
    return (
      <div className="App">
           <Routes/>
      </div>
    );
  }
}
export default App;
