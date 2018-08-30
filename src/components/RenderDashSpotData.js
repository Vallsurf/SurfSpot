import React, { Component } from 'react'

export default class RenderDashSpotData extends Component {
  render() {
    return (
      <div>
        <h3>Swell: {this.props.spotdata.size} ft. {this.props.spotdata.shape_detail.swell}</h3>
        <h3>Wind: {this.props.spotdata.speed_kts} kts. {this.props.spotdata.shape_detail.wind}</h3>
        <h3>Tide: {this.props.spotdata.tide_meters.toFixed(1)}m. {this.props.spotdata.shape_detail.wind}</h3>
      </div>
    )
  }
}
