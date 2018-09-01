import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchDashboardForecast } from '../actions';
import DashSpotData from './DashSpotData';
import spinnner from '../assets/spinning-circles.svg';
import './spot.css';

export class DashSpot extends Component {
  componentDidMount() {
    const spotid = this.props.data.spot_id;
    const county = this.props.data.county_name.split(" ").join("-").toLowerCase();
    this.props.dispatch(fetchDashboardForecast(spotid, county));
  }

  render() {
    return (
      <div className ="SpotData">
        
        {/* Use Link */}
        <a href={`spots/` + this.props.data.county_name + '/' + this.props.data.spot_id + `/` + this.props.data.spot_name}>{this.props.data.spot_name}</a>
       
        {this.props.spotdata.map((spots, index) =>  <DashSpotData key={index} data={spots} spotid={this.props.data.spot_id} />)}
      </div>
    )

}}


const mapStateToProps = state => {
  return {
    spots: state.spots.userspots,
    spotdata: state.spots.spotsnapshot,
    loading: state.spots.loading
  };
}

export default connect(mapStateToProps)(DashSpot); 