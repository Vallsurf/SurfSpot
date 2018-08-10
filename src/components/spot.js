import React, { Component } from 'react'; 
import {connect} from 'react-redux'; 
import './spot.css'

export class Spot extends Component {
  render() {
    const spots = this.props.spots.map((spot, index) => (
      <div className="spot" key={index}>
      <h3 key={index}>{spot.name}</h3>
      <p>{spot.swell}</p>
      <p>{spot.wind}</p>
      <p>{spot.tide}</p>
      </div>
    ))
    

    return (
      <div className="spot-wrapper">
        {spots}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  spots: state.spots
})

export default connect(mapStateToProps)(Spot); 
