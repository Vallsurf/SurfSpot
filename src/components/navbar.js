import React, { Component } from 'react'; 
import {connect} from 'react-redux'; 
import {clearAuth} from '../actions/auth'
import {clearAuthToken} from '../local-storage'
import './navbar.css'

export class Navbar extends Component {

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
}

  render() {   
    
    return (
      <div className="navbar">
          <a href='/dashboard'>SurfSpot.</a>
          <ul>
              <li><a href="/dashboard">Home</a></li>
              <li><a href="/spots">Spots</a></li>
              <li><a href="/" onClick={() =>this.logOut()}>Logout</a></li>
          </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);
