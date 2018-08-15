import React, { Component } from 'react'
import Spot from './spot'

export default class County extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.county._id}</h3>
        {this.props.county.spots.map((singlespot, index) => <Spot key={index} data={singlespot}/>)}
      </div>
    )
  }
}