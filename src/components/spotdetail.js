import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Navbar from './navbar';
import CurrentCondition from './currentcondition';
import Spotadd from './spotadd'
import TideChart from './tidechart'
import SwellChart from './swellchart'
import WindChart from './windchart'
import {fetchForecast, getUserSpots} from '../actions/actions'; 
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
      <div className="spotname"><h1>{this.props.match.params.spotname}</h1>
      <div className="spotpref"><Spotadd addButton={this.props.userspots.findIndex(test => test.spot_id == this.props.match.params.spotid)}  id={this.props.match.params.spotid} dispatch={this.props.dispatch}/></div>
      </div>
      
      
      <div className="currentconditions"> <CurrentCondition data={this.props} hour={hour}/></div>
      <div className="sectionname"> <h2>Hourly Forecast for {today}</h2></div>
      <TideChart data={this.props.totaldetails}/>
      <SwellChart data={this.props.totaldetails}/>
      <WindChart data={this.props.totaldetails}/>
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
