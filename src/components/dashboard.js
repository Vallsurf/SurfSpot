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
            {this.props.spots.map(userspots => <Spot name={userspots.name} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return  {
    spots: state.userspots
  };
  }
  
  export default connect(mapStateToProps)(Dashboard); 
