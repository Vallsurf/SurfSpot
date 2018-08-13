import React, { Component } from 'react'
import Navbar from './navbar';
import {connect} from 'react-redux'; 
import './spotlist.css'

import {fetchSpots, fetchSpotsData} from '../actions'; 

export class Spotlist extends Component {
  
  componentDidMount() {
    this.props.dispatch(fetchSpots());
}

  render() {

      console.log(this.props.spots)

      let spots; 

      if(this.props.spots){
      spots = this.props.spots.map((spots, index) => 
        <div key={index} className="listed-spot">
        <h3 >{spots.spot_name}</h3>
        <button>Add</button>
        </div>
    )
  }

    return (
      <div className="dashboard">
          <Navbar />
        <h1>All Spots</h1>
            {spots}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.spots); 
  return {
    spots: state.allspots
  };
};
  
export default connect(mapStateToProps)(Spotlist); 