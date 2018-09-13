import React, { Component } from 'react'
import SpotLink from './spotlink'

export default class County extends Component {
  render() {
    return (
      <div className="SpotListContainer">
      <h3>{this.props.data._id} County Spots</h3>
      <div className="spotlinks">{this.props.data.spots.map((spot, index) => <SpotLink key={index} data={spot}/>)}</div>
      </div>

    )
  }
}