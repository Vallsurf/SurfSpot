import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Navbar from './navbar';
import SpotForecast from './spotForecast';
import CurrentCondition from './currentcondition';
import Spotadd from './spotadd'
import TideChart from './tidechart'
import SwellChart from './swellchart'
import WindChart from './windchart'
import {fetchForecast, getUserSpots} from '../actions'; 
import './spotdetail.css'


export class Spotdetail extends Component {
    componentDidMount() {
     const spotid = this.props.match.params.spotid; 
     const county = this.props.match.params.county.split(" ").join("-").toLowerCase();
        this.props.dispatch(fetchForecast(spotid, county));
        this.props.dispatch(getUserSpots());
        
    }

  render() {
    var date = new Date(); 
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = date.toLocaleDateString("en-US",options);
    var hour = date.getHours(); 
   
    return (
      <div>
      <div className="spotDetail">
      <Navbar />
      <div className="spotname">{this.props.match.params.spotname}
      <div className="spotpref"><Spotadd addButton={this.props.userspots.findIndex(test => test.spot_id == this.props.match.params.spotid)}  id={this.props.match.params.spotid} dispatch={this.props.dispatch}/></div>
      </div>
      <div className="sectionname"> <h2>{today}</h2></div>
      <div className="sectionname"> <h2>Right Now</h2></div>
      <div className="currentconditions"> <CurrentCondition data={this.props} hour={hour}/></div>
      <div className="sectionname"> <h2>Hourly Forecast</h2></div>
      <div className ='chart'><TideChart data={this.props.totaldetails}/></div>
      <div className ='chart'><SwellChart data={this.props.totaldetails}/></div>
      <div className ='chart'><WindChart data={this.props.totaldetails}/></div>
      {/* <div className="hourly-wrapper">{this.props.totaldetails.map(spot => <div className="hourlydetail"><SpotForecast forecast={spot} data={this.props}/></div>)}</div> */}
      </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
    return  {
      spotdetail: state.spots.spotdetail,
      swelldetail: state.spots.swelldetail, 
      winddetail: state.spots.winddetail,
      totaldetails: state.spots.totaldetails,
      userspots: state.spots.userspots
    };
    }

export default connect(mapStateToProps)(Spotdetail); 
