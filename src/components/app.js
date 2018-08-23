import React, { Component } from 'react'; 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Welcome from './welcome'; 
import Dashboard from './dashboard'; 
import Spotlist from './spotlist';
import Spotdetail from './spotdetail';
import RegistrationPage from './registration'
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/spots" component={Spotlist} />
          <Route exact path="/spots/:county/:spotid/:spotname" component={Spotdetail} />
          <Route exact path="/register" component={RegistrationPage} />
      </div>
    )
  }
}
