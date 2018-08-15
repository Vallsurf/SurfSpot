import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Navbar from './navbar';
import County from './County';
import './spotlist.css'

import {fetchSpots} from '../actions'; 

export class Spotlist extends Component {
  
  componentDidMount() {
    this.props.dispatch(fetchSpots());
}

  render() {
    return (
      <div className="spotlist">
          <Navbar />
      
        <h1>All Spots</h1>
           <div className="AllSpots"> {this.props.spots.map((county, index) => <div className="countylist"><County key={index} county={county} /></div>)}
      </div>
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