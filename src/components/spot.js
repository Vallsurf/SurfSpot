import React, { Component } from 'react'; 
import {connect} from 'react-redux'; 
import {fetchUserSpots} from '../actions'
import './spot.css'

export class Spot extends Component {
  componentDidMount(){
    this.props.dispatch(fetchUserSpots)
  }

  render() {
    let spots; 
    if(this.props.spots){ 
      spots = this.props.spots.map((spot, index) => (
      <div className="spot" key={index}>
      <h3 key={index}>{spot.name}</h3>
      <p>{spot.swell}</p>
      <p>{spot.wind}</p>
      <p>{spot.tide}</p>
      </div>
    ))
  }
    

    return (
      <div className="spot-wrapper">
        {spots}
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

export default connect(mapStateToProps)(Spot); 
