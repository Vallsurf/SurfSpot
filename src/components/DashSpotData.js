import React, { Component } from 'react'
import tide from '../assets/tide.png'
import swell from '../assets/water.png'
import wind from '../assets/wind.png'

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
          if(!thisspot.spot){
            if(thisspot.spot_id === spotid && thisspot.hour === currentHour)
            return( 
            <div className="DashboardData" key={index}>
              <div className="DashboardDataRow"><img src ={swell} width='25px' height='25px' alt='swell'/> <p>  {thisspot.size} ft. {thisspot.shape_detail.swell}</p></div>
              <div className="DashboardDataRow"><img src ={wind} width='25px' height='25px' alt='wind'/> <p> {thisspot.speed_kts} kts. {thisspot.direction_text}</p></div>
              <div className="DashboardDataRow"><img src ={tide} width='25px' height='25px' alt='tide'/> <p> {((thisspot.tide_meters)*(3.28)).toFixed(1)} ft. </p></div>
            </div>
            )
          }
        else{
          if(thisspot.spot === spotid && thisspot.hour === currentHour)
          return(
            <div className="DashboardData" key={index}>
            <div className="DashboardDataRow"><img src ={swell} width='25px' height='25px' alt='swell'/> <p>  {((thisspot.hst)*(3.28)).toFixed(1)} ft. </p></div>
            <div className="DashboardDataRow"><img src ={wind} width='25px' height='25px' alt='wind'/> <p> {thisspot.speed_kts} kts. {thisspot.direction_text}</p></div>
            <div className="DashboardDataRow"><img src ={tide} width='25px' height='25px' alt='tide'/> <p> {((thisspot.tide_meters)*(3.28)).toFixed(1)} ft. </p></div>
          </div>
          )
        }
        })
        }
      </div>
    )
  }
}
