import React, { Component } from 'react'

export default class CurrentCondition extends Component {
  render() {
    const currentHour = 
    this.props.hour === 12 ? this.props.hour + 'PM' : 
    this.props.hour > 12 ? this.props.hour - 12 + 'PM' : 
    this.props.hour +'AM' ;
    
    if(this.props.data.spotdetail === 'nogood'){
      return (
        <div>
        {this.props.data.totaldetails.map((hourlydata, index) =>
          { 
              if(hourlydata.hour === currentHour)
              {return <div className="currentdetails" key={index}>
                  <div className="sectionname"> <h2>Current Conditions:</h2></div>
                  <h3>Swell: {((hourlydata.hst)*(3.2)).toFixed(1)} ft. </h3>
                  <h3>Wind: {(hourlydata.speed_mph).toFixed(1)} mph {hourlydata.direction_text} {hourlydata.direction_degrees} &deg;</h3> 
                  <h3>Tide: {(hourlydata.tide).toFixed(1)} ft.</h3>
                  </div>
                  }
          })}   
        </div>
      )
    }

    else {
    return (
      <div>
      {this.props.data.totaldetails.map((hourlydata, index) =>
        { 
            if(hourlydata.hour === currentHour)
            {return <div className="currentdetails" key={index}>
            <div className="sectionname"> <h2>Current Conditions: {hourlydata.shape_full}</h2></div>
                <h3>Swell: {hourlydata.size} ft. </h3>
                <h3>Wind: {(hourlydata.speed_mph).toFixed(1)} mph {hourlydata.direction_text} {hourlydata.direction_degrees} &deg;</h3> 
                <h3>Tide: {(hourlydata.tide).toFixed(1)} ft.</h3>
                </div>
                }
        })}   
      </div>
    )
  }
}
}
