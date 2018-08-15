import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Navbar from './navbar';
import SpotForecast from './spotForecast';
import {fetchForecast} from '../actions'; 
import './spotdetail.css'

export class Spotdetail extends Component {
    
    componentDidMount() {
        console.log(this.props.match.params.spotid); 
        this.props.dispatch(fetchForecast(this.props.match.params.spotid));
    }

  render() {
    return (
      <div>
        <Navbar />
      <div className="spotDetail">
      <div className="spotname"> <h1>{this.props.match.params.spotname}</h1></div>
      <div className="sectionname"> <h2>Hourly Forecast </h2></div>
      <div className="hourly-wrapper">
      {this.props.spotdetail.map(spot => 
      <div className="hourlydetail">
      <SpotForecast forecast={spot}/>
      </div>
      )}</div>
      </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
    return  {
      spotdetail: state.spotdetail
    };
    }

export default connect(mapStateToProps)(Spotdetail); 
