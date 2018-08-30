import React, { Component } from 'react'
import SpotLink from './spotlink'

export default class County extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.county._id}</h3>
        {this.props.county.spots.map((singlespot, index) => <SpotLink key={index} data={singlespot}/>)}
      </div>
    )
  }
}