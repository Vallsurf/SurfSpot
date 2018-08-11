import React, { Component } from 'react'
import Navbar from './navbar';
import {connect} from 'react-redux'; 
import './spotlist.css'

import {fetchSpots} from '../actions'; 

export class Spotlist extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSpots());
}

  render() {
        const spots = this.props.spots.map((spots, index) => 
        <div className="listed-spot">
        <h3>{spots.name}</h3>
        <button>Add</button>
        </div>
    )

    return (
      <div className="dashboard">
          <Navbar />
        <h1>All Spots</h1>
            {spots}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    spots: state
  })
  
export default connect(mapStateToProps)(Spotlist); 