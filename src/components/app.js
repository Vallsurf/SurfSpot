import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Welcome from './welcome'; 
import Dashboard from './dashboard'; 
import Spotlist from './spotlist';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/spots" component={Spotlist} />
      </div>
    )
  }
}
