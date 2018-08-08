import React, { Component } from 'react'
import {Route, withRouter} from 'react-router-dom';
import './welcome.css'; 

import Login from './login'; 



export default class Welcome extends Component {
  render() {
    return (
      <div className="Welcome"> 
        <Login />
      </div>
    )
  }
}
