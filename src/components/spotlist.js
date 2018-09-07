import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Navbar from './navbar';
import County from './County';
import SpotLink from './spotlink';
import {Link} from 'react-router-dom';
import './spotlist.css'

import {fetchSpots} from '../actions'; 

export class Spotlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: ''};
  }
  
  componentDidMount() {
    this.props.dispatch(fetchSpots());
}

  clickedCounty(county) {
    this.setState({clicked: this.props.spots[county]},
      function (){
        console.log(this.state.clicked.spots)
      }
    );
  }

  render() {
    
    return (
      <div className="spotlist">
          <Navbar />
      
          <h1>Browse Spots</h1>
          <h3>Counties</h3>
         <div className="AllSpots">
         {this.props.spots.map((county, index) => <div className="countylist"><a href="#" onClick={() => this.clickedCounty(index)}>{county._id}</a></div>)}
         
         <div className="countyspots"> 
          {this.state.clicked && <County data={this.state.clicked} />}
            
         </div>
         </div>
        
      
      
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    spots: state.spots.allspots
  };
};
  
export default connect(mapStateToProps)(Spotlist); 