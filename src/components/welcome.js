import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './welcome.css'; 

import Login from './login'; 



export function Welcome(props)  {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
} 
    return (
      <div className="Welcome"> 
        <Login />
      </div>
    ); 
  }

  const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Welcome);

