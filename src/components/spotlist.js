import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Navbar from './navbar';
import County from './County';
import './spotlist.css'

import {fetchSpots} from '../actions'; 

export class Spotlist extends Component {
  
  componentDidMount() {
    this.props.dispatch(fetchSpots());
}

  render() {
    return (
      <div className="spotlist">
          <Navbar />
      
        <h1>All Spots</h1>
         <div className="AllSpots"><ul>{this.props.spots.map((county, index) => <li><div className="countylist"><County key={index} county={county} /></div></li>)}
         </ul>  
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