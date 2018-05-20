import React, { Component } from 'react';
// import logo from './logo.svg';
import {Link} from 'react-router-dom'
import './App.css';

// import {bg} from '../img/app'
import PropTypes from 'prop-types'
class Info extends Component {
  getChildContext() {
      return {value: "purple"};
  }
  constructor(){
    super()
    this.state={
      value:'1000'
    }
  }
  render() {
    let url_bg = require('./img/bg.jpg')
    return (
      <div>
             {/* <h1>Recan</h1> */}
             <img  className='bg' src={url_bg} alt='img'/>
             <br/>
            <Link to={'/login'}><a className="button is-success is-rounded"><b className='enter_site'>Enter Website</b></a></Link>
      </div>
    );
  }
}

export default Info;