import React, { Component } from 'react'
import RenderDashSpotData from './RenderDashSpotData'

export default class DashSpotData extends Component {
  render() {
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = date.toLocaleDateString("en-US", options);
    var hour = date.getHours();
    const currentHour =
      hour === 12 ? hour + 'PM' :
        hour > 12 ? hour - 12 + 'PM' :
          hour + 'AM';
    const spotid = this.props.spotid 

    return (
      <div>
        {this.props.data.map((thisspot,index) => {
            if(thisspot.spot_id === spotid && thisspot.hour === currentHour)
            {return(<RenderDashSpotData key={index} spotdata={thisspot}/>)}
        })
        }
      </div>
    )
  }
}
