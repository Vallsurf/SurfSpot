import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Navbar from './navbar';
import County from './County';
import SpotLink from './spotlink';
import {Link} from 'react-router-dom';
import './spotlist.css'

import {fetchSpots, fetchtest} from '../actions'; 

export class Spotlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: '',
      visible: false};
  }
  
  componentDidMount() {
    this.props.dispatch(fetchSpots());
}

  clickedCounty(county) {
    this.setState({clicked: this.props.spots[county]});
    this.toggle(); 
  }

  toggle(){
   this.setState({
     visible: !this.state.visible
   },
   function (){
     console.log(this.state.visible)
   }
  );
  }

  render() {
    
    return (
      <div className="spotlist">
          <Navbar />
          <h1>All Spots</h1>
          <h3 className="reg">Counties</h3>
          <Link to='#' className="mobile" onClick={() => this.toggle()}><h3>Counties</h3> </Link>
         <div className="AllSpots">
         <div className={"countyContainer" + (this.state.visible ? 'show' : 'dontshow')}>{this.props.spots.map((county, index) => <div className="countylist"><a href="#" onClick={() => this.clickedCounty(index)}>{county._id}</a></div>)}</div>
         
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
    spots: state.spots.allspots,
    test: state.spots.spotsnapshot
  };
};
  
export default connect(mapStateToProps)(Spotlist); 