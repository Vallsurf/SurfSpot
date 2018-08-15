import React, { Component } from 'react'

export default class SpotForecast extends Component {
  render() {
    return (
      <div>
        <p>Swell:</p>
        <p> {this.props.forecast.size} ft.</p>
        <p> {this.props.forecast.shape_detail.swell}</p>
        <p>Wind:</p>
        <p> {this.props.forecast.shape_detail.wind}</p>
        <p>Tide:</p>
        <p> {this.props.forecast.shape_detail.tide}</p>
        <p className="time">{this.props.forecast.hour}</p>
      </div>
    )
  }
}
