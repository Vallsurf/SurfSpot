import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchForecast } from '../actions';
import DashSpotData from './DashSpotData';
import spinnner from '../assets/spinning-circles.svg';
import './spot.css';

export class DashSpot extends Component {
  componentDidMount() {
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = date.toLocaleDateString("en-US", options);
    var hour = date.getHours();
    const currentHour =
      hour === 12 ? hour + 'PM' :
        hour > 12 ? hour - 12 + 'PM' :
          hour + 'AM';
    const spotid = this.props.data.spot_id;
    const county = this.props.data.county_name.split(" ").join("-").toLowerCase();
    this.props.dispatch(fetchForecast(spotid, county));
  }

  render() {
    // if (this.props.loading)
    //  { return (<div id="loading"><img src={spinnner} alt="Loading..." /></div>);}

    return (
      <div>
        <a href={`spots/` + this.props.data.county_name + '/' + this.props.data.spot_id + `/` + this.props.data.spot_name}>{this.props.data.spot_name}</a>
        {this.props.spotdata.map((spots, index) => <DashSpotData key={index} data={spots} spotid={this.props.data.spot_id} />)}
      </div>
    )
    // return (<div id="loading"><img src={spinnner} alt="Loading..." /></div>);
  // }
}}


const mapStateToProps = state => {
  return {
    spots: state.spots.userspots,
    spotdata: state.spots.spotsnapshot,
    loading: state.spots.loading
  };
}

export default connect(mapStateToProps)(DashSpot); 