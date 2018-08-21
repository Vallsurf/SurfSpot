import React, { Component } from 'react'
import './spot.css'

export default class SpotLink extends Component {
  render() {
    return (
      <div>
        <a href={`spots/`+ this.props.data.county_name +'/'+this.props.data.spot_id + `/` + this.props.data.spot_name}>{this.props.data.spot_name}</a>
      </div>
    )
  }
}


