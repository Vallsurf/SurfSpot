import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Navbar from './navbar';
import DashSpot from './DashSpot'
import requiresLogin from './requires-login';
import {getUserSpots, refreshDashData} from '../actions'
import {Link} from 'react-router-dom';
import './dashboard.css'

export class Dashboard extends Component {
  componentDidMount(){
    this.props.dispatch(refreshDashData());
    this.props.dispatch(getUserSpots());
  }

  render() {
    if(this.props.spots.length){
    return (
      <div className="dashboard">
          <Navbar />
        <h1>My Spots</h1>
         <div className="UserSpots"> 
         {this.props.spots.map((userspots, index) =>  <div className="spot" key={index}> <DashSpot  data={userspots} /></div> )}
         </div>
      </div>
    )
  }
  else{
    return(
      <div className="dashboard">
          <Navbar />
        <h1>My Spots</h1>
         <div className="UserSpots"> 
          <p>You have no favorited spots! <Link to="/spots"> Browse Spots </Link> to add some! </p>
         </div>
      </div>
    )
  }
  }
}

const mapStateToProps = state => {
  return  {
    spots: state.spots.userspots
  };
  }
  
  export default requiresLogin()(connect(mapStateToProps)(Dashboard)); 
