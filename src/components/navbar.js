import React, { Component } from 'react'; 
import {connect} from 'react-redux'; 
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';
import './navbar.css'; 

export class Navbar extends Component {

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
}

  render() {   
    
    return (
      <div className="navbar">
          <Link to="/dashboard">SurfSpot.</Link>
          <ul>
              <li><Link to="/dashboard">Home</Link></li>
              <li><Link to="/spots">Spots</Link></li>
              <li><Link to="/" onClick={() =>this.logOut()}>Logout</Link></li>
          </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);
