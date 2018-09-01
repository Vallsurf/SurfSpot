import React, { Component } from 'react'
import SpotLink from './spotlink'

export default class County extends Component {
  render() {
    return (
      <div>
        <div className="CountyHeader"><p>{this.props.county._id}</p></div>
        {this.props.county.spots.map((singlespot, index) => <SpotLink key={index} data={singlespot}/>)}
      </div>
    )
  }
}