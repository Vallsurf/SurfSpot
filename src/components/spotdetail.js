import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Navbar from './navbar';
import SpotForecast from './spotForecast';
import CurrentCondition from './currentcondition';
import {fetchForecast} from '../actions'; 
import './spotdetail.css'


export class Spotdetail extends Component {
  
    componentDidMount() {
     const spotid = this.props.match.params.spotid; 
     const county = this.props.match.params.county.split(" ").join("-").toLowerCase();
        this.props.dispatch(fetchForecast(spotid, county));
    }

  render() {
    var date = new Date(); 
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = date.toLocaleDateString("en-US",options);
    var hour = date.getHours(); 
  

    return (
      <div>
        <Navbar />
      <div className="spotDetail">
      <div className="spotname"> <h1>{this.props.match.params.spotname}</h1></div>
      <div className="sectionname"> <h2>{today}</h2></div>
      <div className="sectionname"> <h2>Current Conditions</h2></div>
      <div className="currentconditions"> <CurrentCondition data={this.props} hour={hour}/></div>
      <div className="sectionname"> <h2>Hourly Forecast</h2></div>
      <div className="hourly-wrapper">
      {this.props.totaldetails.map(spot => 
      <div className="hourlydetail">
      <SpotForecast forecast={spot} data={this.props}/>
      </div>)}
      </div>
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
      totaldetails: state.spots.totaldetails
    };
    }

export default connect(mapStateToProps)(Spotdetail); 
