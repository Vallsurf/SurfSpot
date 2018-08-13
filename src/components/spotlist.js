import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Navbar from './navbar';
import County from './County';
import './spotlist.css'

import {fetchSpots, fetchSpotsData} from '../actions'; 

export class Spotlist extends Component {
  
  componentDidMount() {
    this.props.dispatch(fetchSpots());
}

  render() {

      // console.log(this.props.spots)

      let allspots; 


      if(this.props.spots){
      allspots = this.props.spots.map((spots, index) => {
        
        return(<h2 key={index}>{spots._id}</h2>)
        
        spots.spot.map((singlespot, index)=> {
          // console.log(singlespot.spot_name)
          return(<h3>{singlespot.spot_name}</h3>)
        })
      }
    )
    console.log(allspots)
  }


    return (
      <div className="SpotList">
          <Navbar />
        <h1>All Spots</h1>
            {this.props.spots.map(spot => <County spot={spot} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state.spots); 
  return {
    spots: state.allspots
  };
};
  
export default connect(mapStateToProps)(Spotlist); 