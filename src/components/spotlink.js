import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import {Link} from 'react-router-dom';

import './spot.css'

export class SpotLink extends Component {
  componentDidMount() {
    const spotid = this.props.data.spot_id; 
    const county = this.props.data.county_name.split(" ").join("-").toLowerCase();
       
   }

  render() {
    return (
      <div className="SpotLink">
        <Link to={`spots/`+ this.props.data.county_name +'/'+this.props.data.spot_id + `/` + this.props.data.spot_name}>{this.props.data.spot_name}</Link>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return  {
    spots: state.spots.userspots
  };
  }
  
  export default connect(mapStateToProps)(SpotLink); 