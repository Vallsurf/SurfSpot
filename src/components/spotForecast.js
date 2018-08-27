import React, { Component } from 'react'

export default class SpotForecast extends Component {
  render() {
    if(this.props.data.spotdetail === 'nogood'){
    
      return (
        <div>
        <p>Swell:</p>
        {/* <p> {this.props.forecast.size} ft.</p>
        <p> {this.props.forecast.shape_detail.swell}</p> */}
        <p>Wind:</p>
        <p> {this.props.forecast.speed_kts} kts {this.props.forecast.direction_text}</p>
        <p>Tide:</p>
        <p> {(this.props.forecast.tide).toFixed(1)} ft.</p>
        <p className="time">{this.props.forecast.hour}</p>
        </div>
      )
    }
    else {
    return (
      <div>
        <p>Swell:</p>
        <p> {this.props.forecast.size} ft.</p>
        <p> {this.props.forecast.shape_detail.swell}</p>
        <p>Wind:</p>
        <p>{this.props.forecast.speed_kts} kts {this.props.forecast.direction_text}</p>
        <p> {this.props.forecast.shape_detail.wind}</p>
        <p>Tide:</p>
        <p> {(this.props.forecast.tide).toFixed(1)} ft.</p>
        <p> {this.props.forecast.shape_detail.tide}</p>
        <p className="time">{this.props.forecast.hour}</p>
      </div>
    )
  }
}
}
