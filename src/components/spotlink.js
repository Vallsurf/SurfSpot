import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import './spot.css'

export class SpotLink extends Component {
  componentDidMount() {
    const spotid = this.props.data.spot_id; 
    const county = this.props.data.county_name.split(" ").join("-").toLowerCase();
       
   }

  render() {
    return (
      <div>
        <a href={`spots/`+ this.props.data.county_name +'/'+this.props.data.spot_id + `/` + this.props.data.spot_name}>{this.props.data.spot_name}</a>
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