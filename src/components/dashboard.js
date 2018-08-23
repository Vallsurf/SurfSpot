import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Navbar from './navbar';
import Spot from './spot'
import './dashboard.css'

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
          <Navbar />
        <h1>My Spots</h1>
         <div className="UserSpots"> 
         {this.props.spots.map((userspots, index) =>  <div className="spot"> <Spot key={index} data={userspots} /></div> )}
         </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return  {
    spots: state.spots.userspots
  };
  }
  
  export default connect(mapStateToProps)(Dashboard); 
