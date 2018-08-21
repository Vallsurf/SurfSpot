import React, { Component } from 'react'

export default class CurrentCondition extends Component {
  render() {
    console.log(this.props.data.spotdetail)
    const currentHour = 
    this.props.hour === 12 ? this.props.hour + 'PM' : 
    this.props.hour > 12 ? this.props.hour - 12 + 'PM' : 
    this.props.hour +'AM' ;
    if(this.props.data.spotdetail === 'nogood'){
      return (
        <div>
        {this.props.data.totaldetails.map(hourlydata =>
          { 
              if(hourlydata.hour === currentHour)
              {return <div className="currentdetails">
                  {/* <h3>Overall: {hourlydata.}</h3> */}
                  <h3>Swell:</h3>
                  <h3>Wind: {hourlydata.speed_kts} kts {hourlydata.direction_text} {hourlydata.direction_degrees} &deg;</h3> 
                  <h3>Tide: {(hourlydata.tide_meters).toFixed(1)} ft.</h3>
                  </div>
                  }
          })}   
        </div>
      )
    }

    else {
    return (
      <div>
      {this.props.data.totaldetails.map(hourlydata =>
        { 
            if(hourlydata.hour === currentHour)
            {return <div className="currentdetails">
                <h3>Overall: {hourlydata.shape_full}</h3>
                <h3>Swell: {hourlydata.size} ft. {hourlydata.shape_detail.swell}</h3>
                <h3>Wind: {hourlydata.shape_detail.wind} {hourlydata.speed_kts} kts {hourlydata.direction_text} {hourlydata.direction_degrees} &deg;</h3> 
                <h3>Tide: {hourlydata.shape_detail.tide} {(hourlydata.tide_meters * 3.2808).toFixed(1)} ft.</h3>
                </div>
                }
        })}   
      </div>
    )
  }
}
}
