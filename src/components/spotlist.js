import React, { Component } from 'react'
import Navbar from './navbar';
import {connect} from 'react-redux'; 
import './spotlist.css'

export class Spotlist extends Component {
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
    spots: state.allspots
  })
  
export default connect(mapStateToProps)(Spotlist); 