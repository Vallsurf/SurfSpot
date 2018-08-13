import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Spot from './spot'

export default class County extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.spot._id}</h3>
        {this.props.spot.spots.map(singlespot => <Spot name={singlespot.spot_name}/>)}
      </div>
    )
  }
}


// const mapStateToProps = state => {
//     // console.log(state.spots); 
//     return {
//       spots: state.allspots
//     };
//   };
    
//   export default connect(mapStateToProps)(AllSpots); 