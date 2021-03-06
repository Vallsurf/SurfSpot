import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchDashboardForecast } from '../actions/actions';
import DashSpotData from './DashSpotData';
import spinner from '../assets/spinning-circles.svg';
import {Link} from 'react-router-dom';
import './spot.css';

export class DashSpot extends Component {
   componentDidMount() {
    const spotid = this.props.data.spot_id;
    const county = this.props.data.county_name.split(" ").join("-").toLowerCase();
    this.props.dispatch(fetchDashboardForecast(spotid, county));
    
  }

  render() {
    if (this.props.loading) 
    return <div id="loading"><img src={spinner} alt="Loading..."/></div>;

    return (  
      <div className ="SpotData">
        <Link to={`spots/` + this.props.data.county_name + '/' + this.props.data.spot_id + `/` + this.props.data.spot_name}>{this.props.data.spot_name}</Link>
        {this.props.spotdata.map((dashspots, index) =>  <DashSpotData key={index} data={dashspots} spotid={this.props.data.spot_id} />)}
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